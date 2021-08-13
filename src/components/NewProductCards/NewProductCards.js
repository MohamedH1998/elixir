import "../NewProductCard/NewProductCard.css";
import ProductIcon from "../ProductIcon/ProductIcon";
import data from '../../data/data'
const NewProductCards = ({ scrollToTop }) => {

  const products = data.map((product, i) => {
    return (
      <ProductIcon
      scrollToTop={scrollToTop}
      id={product.id}
      key={i}
      src={product.images[0].url}
      description={product.description}
      alt={product.name}
      name={product.name}
      tagline={product.tagline}
      price={`£${product.price}`}
    />
    )
  })

  return (
    <div className="new-product-container">
      <div className="new-range">
      <h1 className="new-range-title">New Arrival</h1>
        <h2 className="new-range-subtitle">Check out our latest range</h2>
        </div>
      <div className="product-icon">{products}</div>

    </div>
  );
};

export default NewProductCards;
