import React, { useState } from "react";
import ProductIcon from "../ProductIcon/ProductIcon";
import RenderSmoothImage from "../RenderSmoothImage/RenderSmoothImage";
import "./ProductIcons.css";
import data from '../../data/data'
import Search from "../Search/Search";
import NewProductCard from "../NewProductCard/NewProductCard";

const ProductIcons = ({ scrollToTop,children }) => {
  const [filter, setFilter] = useState("");
  const products2 = data.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) || filter === ""
  );

  const products = products2.map((product, i) => {
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

    );
  });
  return (
    <>
      <Search value={filter} onChange={setFilter} />
      <div className="product-icon">
        {products.length >= 1 ? (
          products
        ) : (
          <div className="no-products-found-header">
            <RenderSmoothImage
              src="https://sayingimages.com/wp-content/uploads/nothing-to-see-here-please-disperse-meme.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductIcons;
