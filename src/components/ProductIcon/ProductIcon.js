import React from "react";
import "./ProductIcon.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import RenderSmoothImage from "../RenderSmoothImage/RenderSmoothImage";


const ProductIcon = ({ product, scrollToTop }) => {
  return (
    <Link to={`/products/${product.id}`} onClick={scrollToTop} className="product-card">
      <RenderSmoothImage src={product.images[0].url} alt={product.alt} />
      <p className="product-details name">{product.name}</p>
      <p className="product-details tagline">{product.tagline}</p>
      <Rating name="read-only" value={4} readOnly />
      <p className="product-details price">{product.price}</p>
    </Link>
  );
};

export default ProductIcon;
