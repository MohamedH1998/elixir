import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { BsTrash } from 'react-icons/bs'
import RenderSmoothImage from "../../RenderSmoothImage/RenderSmoothImage";

import {addToCart, takeawayFromCart, removeFomCart} from '../../../redux/Shopping/shoppingActions'

import './CartItem.css'
const CartItem = ({item, addToCart, takeawayFromCart, removeFomCart, products}) => {
    const [quantity, setQuantity] = useState(item.qty)

    const handleIncrease = () => {
        if (quantity <= 10) {
        const newQuantity = quantity + 1 

        addToCart(item.id, 1)


        }
      }
      const handleDecrease = () => {
        if (quantity >= 2) {
            const newQuantity = quantity - 1 
            setQuantity(newQuantity)
            takeawayFromCart(item.id)

        }
      }

      const handleClick = () => {
        removeFomCart(item.id)
      }
    return (
        <div className="cart-item-container">
        <div className="cart-item-image">
            <Link to="" className="cart-item-link">
                <RenderSmoothImage className="cart-item-image" src={item.images[0].url} alt={item.alt}/>      
            </Link>
        </div>
        <div className="cart-item-text">
            <p className="product-details name">{item.name}</p>
            <p className="cart-item-tagline">{item.tagline}</p>
            <div className="container cart-item-qty">
            <div>
                    <button
                      type="button"
                      className="product-quantity-buttons"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      className="product-quantity"
                      id="product-quantity"
                      type="number"
                      min="1"
                      placeholder="0"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button type="button"
                      className="product-quantity-buttons"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                    </div>
            </div>
            <div className="price-trash-container">
            <p className="cart-item-price">{item.price}</p>
            <i onClick={handleClick} className="cart-item-icon"><BsTrash/></i>
            </div>
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
      addToCart: (id, amount) => dispatch(addToCart(id, amount)),
      takeawayFromCart: (id) => dispatch(takeawayFromCart(id)),
      removeFomCart: (id) => dispatch(removeFomCart(id))
  }
}

const mapStateToProps = state => {
  return {
      cart: state.shop.cart,
      products: state.shop.products

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
