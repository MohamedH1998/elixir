import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import NewProductCards from "./components/NewProductCards/NewProductCards";
import Footer from "./components/Footer/Footer";
import ProductIcons from "./components/ProductIcons/ProductIcons";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import Support from "./components/Support";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Search from "./components/Search/Search";
import Collapsibles from "./components/Collapsibles";
import { connect } from 'react-redux'
import ErrorPage from "./components/ErrorPage";

function App({isSignedIn}) {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <Router>
      <Navbar scrollToTop={scrollToTop}/>
      <Switch>
        <Route path="/" exact>
          <Banner />
          <Support/>
          <NewProductCards scrollToTop={scrollToTop} />
        </Route>
        <Route path="/products" exact>
          <Breadcrumbs />
          <ProductIcons scrollToTop={scrollToTop}>
            <Search/>
          </ProductIcons>
        </Route>
        <Route path="/products/:id" exact>
          <Breadcrumbs />
          <Product/>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/account" exact>
        {isSignedIn === false ? <ErrorPage/> : <Collapsibles/> }
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.shop.isSignedIn
  }
}
export default connect(mapStateToProps)(App);
