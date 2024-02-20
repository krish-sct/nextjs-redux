"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/productSlice";
import Image from "next/image";
import DownloadIcon from "../../../public/assets/download_2.png";
import ShoppingCartIcon from "../../../public/assets/shopping_cart.png";

const ProductPreview = ({ products }) => {
  console.log(products);

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
    console.log(sortedProduct);

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
    <div className="product-container">
      <div className="product-card">
        <div className="div-card">
          <div className="img-card">
            <div className="frame-587">
              <div className="group-560">
                {/* firstimage */}
                <div className="rectangle-73">
                  {latestProduct?.components?.filter(
                    (e) => e.key === "img"
                  ) && (
                    <Image
                      src={
                        latestProduct?.components?.find((e) => e.key === "img")
                          ?.value?.[0]
                      }
                      alt="Product eCAM31"
                      width="64"
                      height="55"
                      className="image-prod"
                    />
                  )}
                </div>
              </div>
              {/* second image */}
              <div className="group-584">
                <div className="rectangle-73">
                  {latestProduct?.components?.filter(
                    (e) => e.key === "img"
                  ) && (
                    <Image
                      src={
                        latestProduct?.components?.find((e) => e.key === "img")
                          ?.value?.[1]
                      }
                      alt="Product eCAM31"
                      width="64"
                      height="55"
                      className="image-prod"
                    />
                  )}
                </div>
              </div>
              {/* third image */}
              <div className="group-585">
                <div className="rectangle-73">
                  {latestProduct?.components?.filter(
                    (e) => e.key === "img"
                  ) && (
                    <Image
                      src={
                        latestProduct?.components?.find((e) => e.key === "img")
                          ?.value?.[2]
                      }
                      alt="Product eCAM31"
                      width="64"
                      height="55"
                      className="image-prod"
                    />
                  )}
                </div>
              </div>
              {/* forth image */}
              <div className="group-587">
                <div className="rectangle-73">
                  {latestProduct?.components?.filter(
                    (e) => e.key === "img"
                  ) && (
                    <Image
                      src={
                        latestProduct?.components?.find((e) => e.key === "img")
                          ?.value?.[3]
                      }
                      alt="Product eCAM31"
                      width="64"
                      height="55"
                      className="image-prod"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="group-560-560">
              <div className="rectangle-73-73">
                {latestProduct?.components?.filter((e) => e.key === "img") && (
                  <img
                    src={
                      latestProduct?.components?.find((e) => e.key === "img")
                        ?.value?.[2]
                    }
                    alt="Product eCAM31"
                    width="64"
                    height="55"
                    style={{
                      width: "331.01px",
                      height: "286.38px",
                      top: "53.31px",
                      left: "121.99px",
                    }}
                  />
                )}
              </div>

              <div className="group-587 ">
                <div className="frame-567">
                  <div className="frame-566">
                    <p className="tags">Tags</p>
                  </div>
                  <div className="frame-568">
                    <p className="GMSL-Cameras">GMSL Cameras</p>
                  </div>
                  <div className="frame-567">
                    <p className="HDR-Cameras">HDR Cameras</p>
                  </div>
                  <div className="frame-569">
                    <p className="Sony-Cameras">Sony ISX031 Cameras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1660">
          <div className="header-title">
            {
              latestProduct?.components?.filter((e) => e.key === "header")?.[0]
                ?.value
            }
          </div>
          <div className="group-565">
            <div className="highlight">
              {
                latestProduct?.components?.filter(
                  (e) => e.key === "subtitle"
                )?.[0]?.value
              }
            </div>
            <div className="highlight-content">
              <ul>
                {latestProduct?.components
                  ?.filter((e) => e.key === "list")?.[0]
                  ?.value?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="frame-608">
            <div className="frame-566-566">
              <div className="frame-564">
                <div className="samplePrice">Sample Price</div>
                <div className="USD">
                  {
                    latestProduct?.components?.filter(
                      (e) => e.key === "curreny"
                    )?.[0]?.value
                  }
                </div>
              </div>
            </div>
            <div className="sample-image">
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
          <div className="group-568">
            <div className="group-566">
              <div className="group-562">
                <div className="frame-563-563">
                  <div className="shopping_cart">
                    <div className="shopping_cart-icon">
                      {/* <Image
                        src={ShoppingCartIcon}
                        alt="icon"
                        priority="false"
                      ></Image> */}
                    </div>
                    <div className="bounding-box"></div>
                  </div>
                  <div className="text-contact">Contact Us</div>
                </div>
                <div className="rectangle-92-92">
                  <Image
                    src={ShoppingCartIcon}
                    alt="icon"
                    priority="false"
                  ></Image>
                </div>
                <div className="contactus-tobuy">Contact Us to Buy</div>
              </div>
            </div>
            <div className="group-567">
              <div className="group-563">
                <div className="frame-563">
                  <div className="download_2">
                    <div className="download_2-icon">
                      {/* <Image
                        src={DownloadIcon}
                        alt="Icon"
                        priority="false"
                      ></Image> */}
                    </div>
                    <div className="bounding-box"></div>
                  </div>
                  <div className="documents">Documents</div>
                </div>
                <div className="rectangle-92">
                  <Image src={DownloadIcon} alt="Icon" priority="false"></Image>
                </div>
                <div className="download-documents">Download Documents</div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;

{
  /* <div className="productSide-comp">
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
          </div> */
}
