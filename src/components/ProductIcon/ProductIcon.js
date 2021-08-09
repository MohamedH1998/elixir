import React from "react";
import "./ProductIcon.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import RenderSmoothImage from "../RenderSmoothImage/RenderSmoothImage";


const ProductIcon = ({ id, src, alt, tagline, name, price, scrollToTop }) => {
  return (
    <Link to={`/products/${id}`} onClick={scrollToTop} className="product-card">
      <RenderSmoothImage src={src} alt={alt} />
      <p className="product-details name">{name}</p>
      <p className="product-details tagline">{tagline}</p>
      <Rating name="read-only" value={4} readOnly />
      <p className="product-details price">{price}</p>
    </Link>
  );
};

export default ProductIcon;
