import React from 'react'
import './Cart.css'

const Cart = ({subTotal, quantityInBasket}) => {
    return (
        <div className="cart-container">
            <h3 className="subtotal-heading">Subtotal £ {subTotal}</h3>
            <button className="checkout-btn">Proceed to checkout ( {quantityInBasket} {`${quantityInBasket > 1 ? 'items' : 'item'} )`}</button>
            
        </div>
    )
}

export default Cart
