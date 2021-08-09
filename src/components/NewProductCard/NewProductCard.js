import React from "react";
import RenderSmoothImage from "../RenderSmoothImage/RenderSmoothImage";
import { Link } from "react-router-dom";

const NewProductCard = ({ alt, src, tagline, scrollToTop }) => {
  const rand = Math.floor(Math.random() * 8 + 1);
  return (
    <div className="new-product-card" onClick={scrollToTop}>
      <Link
        to={`/products/${rand}`}
        className="new-product-img"
        onClick={() => scrollToTop}
      >
        <RenderSmoothImage src={src} className="new-product-img" alt={alt} />
      </Link>
    </div>
  );
};

export default NewProductCard;
