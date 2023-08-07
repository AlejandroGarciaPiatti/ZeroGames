import cart from './assets/shopping-cart-outline-svgrepo-com.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} id="widgetIcon" alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget