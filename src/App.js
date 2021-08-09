import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import NewProductCards from "./components/NewProductCards/NewProductCards";
import Footer from "./components/Footer/Footer";
import ProductIcons from "./components/ProductIcons/ProductIcons";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import Product from "./components/Product/Product";
import Test from "./components/Test";
import Cart from "./components/Cart/Cart";
function App() {
  const [quantityInBasket, setQuantityInBasket] = useState(0);
  const [subTotal, setSubTotal] = useState(0)

  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <Router>
      <Navbar scrollToTop={scrollToTop} quantityInBasket={quantityInBasket} />
      <Switch>
        <Route path="/" exact>
          <Banner />
          <NewProductCards scrollToTop={scrollToTop} />
        </Route>
        <Route path="/products" exact>
          <Breadcrumbs />
          <ProductIcons scrollToTop={scrollToTop} />
        </Route>
        <Route path="/products/:id" exact>
          <Breadcrumbs />
          <Product quantityInBasket={quantityInBasket} setQuantityInBasket={setQuantityInBasket} subTotal={subTotal} setSubTotal={setSubTotal}/>
        </Route>
        <Route path="/cart" exact>
          <Cart subTotal={subTotal} quantityInBasket={quantityInBasket}/>
        </Route>
        <Route path="*">
          <div>I dont exist :(</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
