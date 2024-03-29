"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../redux/slices/articleSlice";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";
import Image from "next/image";
import Error from "../error";

const Articles = ({ articles }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [LatestData, setLatestData] = useState([]);
  const [imgWidth, setImgWidth] = useState(null);

  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );
  // console.log(article);

  useEffect(() => {
    const sortedData = articles
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    setLatestData(sortedData);
  }, [articles]);

  const getHeader = (header) => {
    return header.value || "";
  };

  const handleImageLoad = (e) => {
    setImgWidth(e.target.width);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchArticle())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching articles", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div>
      <hr />

      <h4 className="hr">Highlighted</h4>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        ishighlighted &&
        LatestData && (
          <div className="card">
            <a href={`/articles/${LatestData._id}`} className="temp-link">
              {LatestData?.components?.filter((e) => e.key === "images")
                ?.length > 0 && (
                <div className="images">
                  {LatestData.components.find((e) => e.key === "images")
                    ?.imgs?.[0] && (
                    <Suspense fallback={<div className="spinner"></div>}>
                      <Image
                        className="images-imgs"
                        src={
                          LatestData.components.find((e) => e.key === "images")
                            ?.imgs[0]?.src
                        }
                        alt={
                          LatestData.components.find((e) => e.key === "images")
                            ?.imgs[0]?.alt
                        }
                        onLoad={handleImageLoad}
                        width={600}
                        height={400}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      />
                    </Suspense>
                  )}
                </div>
              )}
              <div className="f-r color-navy ">
                {handleDateString(LatestData.createdAt)}
              </div>
              <br />
              <div className="list-header" style={{ width: imgWidth }}>
                {
                  LatestData?.components?.filter((e) => e.key === "header")?.[0]
                    ?.value
                }
              </div>
              <div className="listing-description" style={{ width: imgWidth }}>
                {
                  LatestData?.components?.filter(
                    (e) => e.key === "description"
                  )?.[0]?.value
                }
              </div>
              <div className="color-navy">
                {
                  LatestData?.components?.filter(
                    (e) => e.key === "subTitle"
                  )?.[0]?.value
                }
              </div>
            </a>
          </div>
        )
      )}
    </div>
  );
};
export default Articles;
