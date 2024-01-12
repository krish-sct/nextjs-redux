"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../redux/slices/articleSlice";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const Articles = ({ articles }) => {
  const dispatch = useDispatch();

  const article = useSelector((state) => state?.articleData?.articles);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <ul>
      {articles?.articles?.map((article, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/articles/${article._id}`}>
              {
                article?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">{handleDate(article.createdAt)}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Articles;
