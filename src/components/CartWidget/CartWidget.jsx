import cart from './assets/shopping-cart_3144456.png'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img className="img-cart" src={cart} alt="cart-widget" value="cart"/>
            <p>0</p>
            
        </div>
    )
}

export default CartWidget