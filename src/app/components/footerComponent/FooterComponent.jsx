"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../../redux/slices/articleSlice";
import { useSelector } from "react-redux";
import { handleDateString } from "../../../utils/common";

const FooterComponent = ({ data }) => {
  const dispatch = useDispatch();
  const [imgWidth, setImgWidth] = useState(null);

  // const article = useSelector((state) => state?.articleData?.articles);
  // console.log(article);

  const getHeader = (header) => {
    return header.value || "";
  };

  const handleImageLoad = (e) => {
    setImgWidth(e.target.width);
  };

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <div>
      <hr />
      <h3>camera</h3>
      <div className="list-container">
        <ul className="ul">
          {data?.articles?.map((article, i) => (
            <div key={i} className="footer-card">
              <li>
                <a href={`/articles/${article._id}`} className="temp-link">
                  {article?.components?.filter((e) => e.key === "mainImg")
                    ?.length > 0 && (
                    <div className="images">
                      {article.components
                        .find((e) => e.key === "mainImg")
                        ?.mainImgs?.map((img, imgI) => (
                          <img
                            className="footerlisting-img"
                            src={img?.src}
                            alt={img?.alt}
                            key={imgI}
                            onLoad={handleImageLoad}
                          />
                        ))}
                    </div>
                  )}
                  <div className="f-r color-navy">
                    {handleDateString(article.createdAt)}
                  </div>
                  <br />
                  <div className="list-header" style={{ width: imgWidth }}>
                    {
                      article?.components?.filter(
                        (e) => e.key === "header"
                      )?.[0]?.value
                    }
                  </div>
                  <div
                    className="listing-description"
                    style={{ width: imgWidth }}
                  >
                    {
                      article?.components?.filter(
                        (e) => e.key === "description"
                      )?.[0]?.value
                    }
                  </div>
                  <div className="color-navy">
                    {
                      article?.components?.filter(
                        (e) => e.key === "subTitle"
                      )?.[0]?.value
                    }
                  </div>
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;
