"use client";
import React, { useState } from "react";

const RelatedComponent = ({ data, dataTemplate }) => {
  // console.log(data, dataTemplate);
  const [isRelated, setIsRelated] = useState(true);
  const [imgHeight, setImgHeight] = useState(null);

  const handleImageLoad = (e) => {
    setImgHeight(e.target.height);
  };
  return (
    <div>
      <hr />
      <h4 className="hr">Related {dataTemplate}</h4>
      {isRelated && (
        <div className="sidecomp-listing">
          <ul style={{ listStyleType: "none" }}>
            {data?.map((item, i) => (
              <div key={i} className="card">
                <li>
                  <a
                    href={`/${dataTemplate}/${item._id}`}
                    className="temp-link"
                  >
                    {item?.components?.filter((e) => e.key === "mainImg")
                      ?.length > 0 && (
                      <div className="images">
                        {item.components
                          .find((e) => e.key === "mainImg")
                          ?.mainImgs?.map((img, imgI) => (
                            <img
                              className="listing-img"
                              src={img?.src}
                              alt={img?.alt}
                              key={imgI}
                              onLoad={handleImageLoad}
                            />
                          ))}
                      </div>
                    )}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <div>
            <ul style={{ listStyleType: "none" }}>
              {data?.map((item, i) => (
                <div key={i} style={{ height: "11rem", paddingTop: "25px" }}>
                  <li>
                    <a
                      href={`/${dataTemplate}/${item._id}`}
                      className="temp-link"
                    >
                      <div
                        className="list-header"
                        style={{ height: imgHeight }}
                      >
                        {
                          item?.components?.filter(
                            (e) => e.key === "header"
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
      )}
    </div>
  );
};

export default RelatedComponent;
