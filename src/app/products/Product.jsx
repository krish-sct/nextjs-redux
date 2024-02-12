"use client";
import React from "react";
import ProductPreview from "../components/ProductPreview";

const Product = ({ products }) => {
  // console.log(products);

  return (
    <div>
      <div>Product page</div>
      <div>
        <ProductPreview products={products} />
      </div>
    </div>
  );
};

export default Product;
