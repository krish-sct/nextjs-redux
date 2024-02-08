"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/productSlice";
import ProductPreview from "../components/ProductPreview";

const Product = ({ products }) => {
  // console.log(products);

  const [latestProduct, setLatestProduct] = useState([]);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showDocument, setShowDocument] = useState(false);

  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state?.productData?.products?.products
  );
  // console.log(product);

  useEffect(() => {
    const sortedProduct = products
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    setLatestProduct(sortedProduct);
  }, [products]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleContactUsClick = () => {
    setShowContactUs(true);
  };

  const handleDocumentClick = () => {
    setShowDocument(true);
  };

  return (
    <div>
      <div>Product page</div>
      <div>
        <ProductPreview products={products} />
      </div>
      <div>
        <div className="product-card">
          <div className="img-card">
            {latestProduct?.components?.filter((e) => e.key === "img") && (
              <div className="productImages">
                <img
                  src={
                    latestProduct.components.find((e) => e.key === "img")
                      ?.value?.[0]
                  }
                  alt="Product eCAM31"
                />
              </div>
            )}
          </div>
          <div className="productSide-comp">
            <div>
              {
                latestProduct?.components?.filter(
                  (e) => e.key === "header"
                )?.[0]?.value
              }
            </div>
            <br />
            <div>
              {
                latestProduct?.components?.filter(
                  (e) => e.key === "subtitle"
                )?.[0]?.value
              }
              <ul>
                {latestProduct?.components
                  ?.filter((e) => e.key === "list")?.[0]
                  ?.value?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
              </ul>
            </div>
            <div className="sidecomp-listing">
              <div className="currency-card">
                SamplePrice
                <br />
                {
                  latestProduct?.components?.filter(
                    (e) => e.key === "curreny"
                  )?.[0]?.value
                }
              </div>
              <br />
              <div className="img-card">
                {latestProduct?.components?.filter((e) => e.key === "logo")
                  .length > 0 && (
                  <ul
                    className="sidecomp-listing"
                    style={{ listStyleType: "none" }}
                  >
                    {latestProduct.components
                      .find((e) => e.key === "logo")
                      ?.value?.map((imageUrl, i) => (
                        <li key={i}>
                          <img src={imageUrl} alt={`logo:${i}`} />
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
            <br />
            <div className="sidecomp-listing">
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    border: "3px",
                  }}
                  onClick={handleContactUsClick}
                >
                  ContactUs
                </button>
                {showContactUs && (
                  <div>
                    {
                      latestProduct?.components?.filter(
                        (e) => e.key === "contact-us"
                      )?.[0]?.value
                    }
                  </div>
                )}
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    border: "3px",
                  }}
                  onClick={handleDocumentClick}
                >
                  Documents
                </button>
                {showDocument && (
                  <div>
                    {
                      latestProduct?.components?.filter(
                        (e) => e.key === "Documents"
                      )?.[0]?.value
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
