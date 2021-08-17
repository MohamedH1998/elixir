import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import CartItem from './CartItem'




const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const cartItems = cart.map((item, i)=> <CartItem key={i} item={item}/>)
    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price
        })
        setTotalItems(items)

        setTotalPrice(price)
    }, [cart, totalPrice, totalItems])
    return (
        <div className="cart-container">
            <h3 className="subtotal-heading">Subtotal ( {totalItems} items ):<i className="subtotal-price"> £ {totalPrice.toFixed(2)}</i></h3>
            <button className="checkout-btn">Proceed to checkout</button>

            { cart.length ? cartItems : <h2 className="empty-cart">Nothing here :( </h2>}
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.shop.cart,

    }
}

export default connect(mapStateToProps)(Cart)
