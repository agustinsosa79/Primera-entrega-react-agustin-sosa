import { useContext } from 'react'
import cart from './assets/shopping-cart_9379615.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" className='cart'>
            <img className="img-cart" src={cart} alt="cart-widget" value="cart"/>
            <h4 className='color-carrito'>{totalQuantity}</h4>
        </Link>
    )
}

export default CartWidget