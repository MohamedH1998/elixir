import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./Navbar.css";
import GoogleAuth from '../GoogleAuth'
import useWindowDimensions from "../hooks";

import {connect } from 'react-redux'

const Navbar = ({ scrollToTop, isSignedIn, cart }) => {

  const [click, setClick] = useState(false);
  const [cartCount, setCartCount] = useState(0)
  const {height, width} = useWindowDimensions()


  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  


  const handleClick = () => {
    if (width <= 750) {
      setClick(!click);
      scrollToTop();
  };
  }
  useEffect(()=> {
    click ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';
  }, [click])

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={() => scrollToTop()} className="navbar-logo">
          elixir
        </Link>
        <span onClick={() => setClick(!click)} className="menu-icon">
          {click ? <FaTimes /> : <FaBars />}
        </span>
      </div>
      <div className="nav-items-container">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        
        <li className="nav-item">
          <Link to="/" onClick={handleClick} className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" onClick={handleClick} className="nav-links">
            Products
          </Link>
        </li>
        <li className="nav-item">
          {isSignedIn ? (
          <Link to="/account" onClick={handleClick} className="nav-links">
            <VscAccount className="nav-icon" />
            My Account
          </Link>) : (
            <i className="nav-links"><GoogleAuth/></i>
          )}
        </li>
        <li className="nav-item">
          <Link to="/cart" onClick={handleClick} className="nav-links">
            <AiOutlineShoppingCart className="nav-icon" />
            Cart ( {cartCount} )
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
    isSignedIn: state.shop.isSignedIn
  }
}
export default connect(mapStateToProps)(Navbar);
