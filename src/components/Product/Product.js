import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import {connect} from 'react-redux'
import "./Product.css";
import ProductIcon from "../ProductIcon/ProductIcon";

import {addToCart} from '../../redux/Shopping/shoppingActions'

const Product = ({products, addToCart}) => {

  const [quantity, setQuantity] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false);
  const params = useParams();
  const i = params.id;
  const selectedProductArray = products.filter(prod => prod.id == i)
  const selectedProduct = selectedProductArray[0]


  const handleIncrease = () => {
    if (quantity <= 10) {
      setQuantity(quantity + 1)
    }
  }
  const handleDecrease = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }


  const onSubmit = (e) => {
    e.preventDefault()
    addToCart(selectedProduct.id, quantity)
    setQuantity(0)
  };


  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="product-page-container">
      <div className="product">

        <div className="product-imgs">
          <div className="holder">
            <div className="preview-imgs">
              <img
                alt={selectedProduct.images.tagline}
                className={`smooth-image preview-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={selectedProduct.images[0].url}
              />
              <img
                alt={selectedProduct.images.tagline}
                className={`smooth-image preview-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={selectedProduct.images[1].url}
              />
            </div>
            <div className="cal-8">
              <img
                alt={selectedProduct.images.tagline}
                className={`smooth-image main-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={selectedProduct.images[2].url}
              />
            </div>
          </div>
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <h1 className="product-name">{selectedProduct.name}</h1>
            <h2 className="product-price">{`£${selectedProduct.price}`}</h2>
            <hr className="product-hr"></hr>
            <p className="product-description">{selectedProduct.description}</p>
            <div className="product-detail">
              <ul>
                <li>
                  <TiTick className="product-icons" /> Available:{" "}
                  <span>in stock</span>
                </li>
                <li>
                  <TiTick className="product-icons" /> All our bottles are made
                  from 100% recycled plastics
                </li>
                <li>
                  <TiTick className="product-icons" /> Suitable for vegetarians
                </li>
                <li>
                  <TiTick className="product-icons" />
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  <TiTick className="product-icons" /> Shipping Fee:{" "}
                  <span>Free</span>
                </li>
              </ul>
            </div>
            <hr className="product-hr"></hr>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="add-to-cart-container">
                <div className="product-quantity-container">
                  <label
                    htmlFor="product-quantity"
                    className="product-quantity-label"
                  >
                    Quantity
                  </label>
                  <div className="product-quantity-toggles">
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
                      min="0"
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
                <hr className="product-hr"></hr>
                <button type="submit"
                  className= "add-to-basket"
                >Add to your basket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h2 className="other-products">Other products you may like:</h2>
      <div className="product-icon">
        
        <ProductIcon
          scrollToTop={scrollToTop}
          product={products[4]}
        />
                <ProductIcon
          scrollToTop={scrollToTop}
          product={products[3]}
        />
                <ProductIcon
          scrollToTop={scrollToTop}
          product={products[7]}
        />

      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, amount) => dispatch(addToCart(id, amount))
  }
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)