"use client";
import React, { useState } from "react";
import { handleDateString } from "../../../utils/common";

const SideComponent = ({ data, dataTemplate }) => {
  console.log(data, dataTemplate);

  const [isLatest, setIsLatest] = useState(true);

  return (
    <div>
      <hr />
      <h4 className="hr">Latest</h4>
      {isLatest && (
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
                      <div className="f-r color-navy ">
                        {handleDateString(item.createdAt)}
                      </div>
                      <br />
                      <div className="list-header">
                        {
                          item?.components?.filter(
                            (e) => e.key === "header"
                          )?.[0]?.value
                        }
                      </div>
                      <div className="listing-description">
                        {
                          item?.components?.filter(
                            (e) => e.key === "description"
                          )?.[0]?.value
                        }
                      </div>
                      <div className="color-navy">
                        {
                          item?.components?.filter(
                            (e) => e.key === "subTitle"
                          )?.[0]?.value
                        }
                      </div>
                      <hr />
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

export default SideComponent;
