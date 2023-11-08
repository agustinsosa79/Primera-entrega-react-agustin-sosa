import './Checkout.css'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, email }) => {
        setLoading(true)


        try {
            const objOrder = {
                comprador: {
                    nombre, telefono, email
                },
                items: cart,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: prodQuantity})
                }else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'pedidos')

                const orderAdded = await addDoc(orderRef, objOrder)
                
                setOrderId(orderAdded.id)
                console.log(setOrderId)
                clearCart()
            } else {
                console.log('hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <h1 className="loading-message">Se esta generando su orden...</h1>
    }
    if(orderId) {
        return <h1 className="order-id-message">El ID de su orden es: {orderId} </h1>
    }

    return (
        <div>
            <h3>Checkout</h3>
            <CheckoutForm  onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout