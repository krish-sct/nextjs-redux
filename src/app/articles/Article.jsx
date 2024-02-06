"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../redux/slices/articleSlice";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";

const Articles = ({ articles }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [LatestData, setLatestData] = useState([]);

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

  useEffect(() => {
    setIsHighlighted(true);
    setIsLoading(true);
    dispatch(fetchArticle());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && LatestData && (
        <div className="card">
          <a href={`/articles/${LatestData._id}`} className="temp-link">
            {LatestData?.components?.filter((e) => e.key === "mainImg")
              ?.length > 0 && (
              <div className="images">
                {LatestData.components
                  .find((e) => e.key === "mainImg")
                  ?.mainImgs?.map((img, imgI) => (
                    <img
                      className="images-imgs"
                      src={img?.src}
                      alt={img?.alt}
                      key={imgI}
                    />
                  ))}
              </div>
            )}
            <div className="f-r color-navy ">
              {handleDateString(LatestData.createdAt)}
            </div>
            <br />
            <div className="list-header">
              {
                LatestData?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </div>
            <div className="listing-description">
              {
                LatestData?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="color-navy">
              {
                LatestData?.components?.filter((e) => e.key === "subTitle")?.[0]
                  ?.value
              }
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Articles;
