import "./NewProductCard.css";
import NewProductCard from "./NewProductCard";

const NewProductCards = ({ scrollToTop }) => {
  return (
    <div className="new-product-container">
      <h1 className="new-range">Our New Range</h1>
      <div className="new-product-cards">
        <NewProductCard
          scrollToTop={scrollToTop}
          alt="product image"
          src="https://images.unsplash.com/photo-1543364038-28b7a0578c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          tagline="100% Organic"
        />
        <NewProductCard
          scrollToTop={scrollToTop}
          alt="product image"
          src="https://images.unsplash.com/photo-1543364038-840000a90245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
          tagline="New citrus range"
        />
        <NewProductCard
          scrollToTop={scrollToTop}
          alt="product image"
          src="https://images.unsplash.com/photo-1543363950-73924e68be98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          tagline="NEW Plastic Free"
        />
      </div>
    </div>
  );
};

export default NewProductCards;
