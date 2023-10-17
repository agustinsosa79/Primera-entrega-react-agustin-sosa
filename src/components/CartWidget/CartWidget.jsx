import { useContext } from 'react'
import cart from './assets/shopping-cart_3144456.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" className='cart'>
            <img className="img-cart" src={cart} alt="cart-widget" value="cart"/>
            {totalQuantity}    
        </Link>
    )
}

export default CartWidget