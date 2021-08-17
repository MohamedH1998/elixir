import "../NewProductCard/NewProductCard.css";
import ProductIcon from "../ProductIcon/ProductIcon";
import data from '../../data/data'

import { connect } from 'react-redux'

const NewProductCards = ({ scrollToTop, products }) => {

  const productsList = products.map((product, i) => {
    return (
      <ProductIcon
      scrollToTop={scrollToTop}
      product={product}
      key={i}
    />
    )
  })

  return (
    <div className="new-product-container">
      <div className="new-range">
      <h1 className="new-range-title">New Arrival</h1>
        <h2 className="new-range-subtitle">Check out our latest range</h2>
        </div>
      <div className="product-icon">{productsList}</div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
      products: state.shop.products
  }
}

export default connect(mapStateToProps)(NewProductCards);
