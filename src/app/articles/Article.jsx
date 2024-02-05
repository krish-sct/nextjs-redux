"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../redux/slices/articleSlice";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";

const Articles = ({ articles }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(true);

  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );
  // console.log(article);

  const createdAtTime = articles?.map((article, i) => article?.createdAt);
  // console.log(createdAtTime);

  const createdAtTimeCopy = [...createdAtTime];

  const sortedByLatest = createdAtTimeCopy.sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // console.log(sortedByLatest);

  const latestArticles = articles?.find(
    (article) => article.createdAt === sortedByLatest[0] || null
  );
  // console.log(latestArticles);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && latestArticles && (
        <div className="card">
          <a href={`/articles/${latestArticles._id}`} className="temp-link">
            {latestArticles?.components?.filter((e) => e.key === "mainImg")
              ?.length > 0 && (
              <div className="images">
                {latestArticles.components
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
              {handleDateString(latestArticles.createdAt)}
            </div>
            <br />
            <div className="list-header">
              {
                latestArticles?.components?.filter(
                  (e) => e.key === "header"
                )?.[0]?.value
              }
            </div>
            <div className="listing-description">
              {
                latestArticles?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="color-navy">
              {
                latestArticles?.components?.filter(
                  (e) => e.key === "subTitle"
                )?.[0]?.value
              }
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Articles;
