import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import NewProductCards from "./components/NewProductCards";
import Footer from "./components/Footer/Footer";
import ProductIcons from "./components/ProductIcons";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import Product from "./components/Product";
function App() {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <Router>
      <Navbar scrollToTop={scrollToTop} />
      <Switch>
        <Route path="/" exact>
          <Banner />
          <NewProductCards scrollToTop={scrollToTop} />
        </Route>
        <Route path="/products/:id">
          <Breadcrumbs />
          <Product />
        </Route>
        <Route path="/products" exact>
          <Breadcrumbs />
          <ProductIcons scrollToTop={scrollToTop} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
