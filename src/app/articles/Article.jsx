import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const Articles = ({ articles }) => {
  const article = useSelector((state) => state?.articleData?.articles);

  const getHeader = (header) => {
    return header.value || "";
  };

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
