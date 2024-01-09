import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const NewsLetter = ({ newsLetter }) => {
  const newsLetters = useSelector((state) => state?.newsLetterData?.newsLetter);

  const getHeader = (header) => {
    return header.value || "";
  };
  return (
    <ul>
      {newsLetter?.newsLetter?.map((newsLetters, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/newsLetter/${newsLetters._id}`}>
              {
                newsLetters?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">
              {handleDate(newsLetters.createdAt)}
            </p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default NewsLetter;
