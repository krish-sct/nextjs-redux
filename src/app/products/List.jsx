"use client";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Product from "./Product";
import { useSelector } from "react-redux";

const List = () => {
  const products = useSelector(
    (state) => state?.productData?.products?.products
  );
  // console.log(products);

  return (
    <div>
      <Breadcrumb dataTemplate="products" />
      <h1 className="text-subhead">Products</h1>
      <div>
        <Product products={products} />
      </div>
    </div>
  );
};

export default List;
