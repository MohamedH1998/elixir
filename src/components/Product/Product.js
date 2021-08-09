import React, { useState } from "react";
import data from "../data/data";
import RenderSmoothImage from "./RenderSmoothImage";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import "./Product.css";
import ProductIcon from "./ProductIcon";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [buttonToggle, setButtonToggle] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const params = useParams();
  const i = params.id;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => quantity >= 2 && setQuantity(quantity - 1);

  const onSubmit = (e) => {
    e.preventDefault();
    setButtonToggle(!buttonToggle);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="product-page-container">
      <div className="product">
        <div className="product-imgs">
          <div className="holder">
            <div className="preview-imgs">
              <img
                alt={data[i].images.tagline}
                className={`smooth-image preview-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={data[i].images[0].url}
              />
              <img
                alt={data[i].images.tagline}
                className={`smooth-image preview-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={data[i].images[1].url}
              />
            </div>
            <div className="cal-8">
              <img
                alt={data[i].images.tagline}
                className={`smooth-image main-img image-${
                  imageLoaded ? "visible" : "hidden"
                }`}
                onLoad={() => setImageLoaded(true)}
                src={data[i].images[2].url}
              />
            </div>
          </div>
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <h1 className="product-name">{data[i].name}</h1>
            <h2 className="product-price">{`£${data[i].price}`}</h2>
            <hr className="product-hr"></hr>
            <p className="product-description">{data[i].description}</p>
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
                      min="1"
                      placeholder="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      type="button"
                      className="product-quantity-buttons"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr className="product-hr"></hr>
                <button
                  className={
                    buttonToggle ? "add-to-basket" : "cant-purchase-button"
                  }
                >
                  {buttonToggle
                    ? "Add to your basket"
                    : "You can't really buy this, come on!👨🏽‍🎨"}
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
          id={data[4].id}
          key={data[4].id}
          src={data[4].images[0].url}
          alt={data[4].name}
          name={data[4].name}
          tagline={data[4].tagline}
          price={`£${data[4].price}`}
        />
        <ProductIcon
          scrollToTop={scrollToTop}
          id={data[3].id}
          key={data[3].id}
          src={data[3].images[0].url}
          alt={data[3].name}
          name={data[3].name}
          tagline={data[3].tagline}
          price={`£${data[4].price}`}
        />
        <ProductIcon
          scrollToTop={scrollToTop}
          id={data[7].id}
          key={data[7].id}
          src={data[7].images[0].url}
          alt={data[7].name}
          name={data[7].name}
          tagline={data[7].tagline}
          price={`£${data[4].price}`}
        />
      </div>
    </div>
  );
};

export default Product;