"use client";
import React, { useEffect, useState } from "react";
import { handleDateString } from "../../../utils/common";

const SideComponent = ({ data, dataTemplate }) => {
  // console.log(data);
  const [isLatest, setIsLatest] = useState(true);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortedData = data
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const latestItems = sortedData?.slice(1, Math.min(data.length - 1, 4));
    setSortedData(latestItems);
  }, [data]);

  return (
    <div>
      <hr />
      <h4 className="hr">Latest</h4>
      {isLatest && (
        <div className="sidecomp-listing">
          <ul style={{ listStyleType: "none" }}>
            {sortedData?.map((item, i) => (
              <div key={i} className="card">
                <li>
                  <a
                    href={`/${dataTemplate}/${item._id}`}
                    className="temp-link"
                  >
                    {item?.components?.filter((e) => e.key === "images")
                      ?.length > 0 && (
                      <div className="images">
                        {item.components.find((e) => e.key === "images")
                          ?.imgs?.[0] && (
                          <img
                            className="footerComplisting-img"
                            src={
                              item.components.find((e) => e.key === "images")
                                ?.imgs[0]?.src
                            }
                            alt={
                              item.components.find((e) => e.key === "images")
                                ?.imgs[0]?.alt
                            }
                          />
                        )}
                      </div>
                    )}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <div>
            <ul style={{ listStyleType: "none" }}>
              {sortedData?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    height: "11rem",
                    paddingTop: "25px",
                    maxWidth: "min-content",
                  }}
                >
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
