"use client";
import React, { useState, useEffect } from "react";

const RelatedComponent = ({ data, dataTemplate }) => {
  // console.log(data);
  const [imgHeight, setImgHeight] = useState(null);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const relatedData = data
      ?.slice()
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    const latestItems = relatedData?.slice(1, Math.min(data.length - 1, 4));
    setSortedData(latestItems);
  }, [data]);

  const handleImageLoad = (e) => {
    setImgHeight(e.target.height);
  };

  return (
    <div>
      <hr />
      <h4 className="hr">Related {dataTemplate}</h4>
      {
        <div className="sidecomp-listing">
          <ul style={{ listStyleType: "none" }}>
            {sortedData?.map((item, i) => (
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
                <li>
                  {item?.components
                    ?.filter((e) => e.key === "related")?.[0]
                    ?.value?.map((relatedItem) => relatedItem.value)}
                </li>
              </div>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default RelatedComponent;
