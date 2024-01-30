import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchNewsLetter } from "../../redux/slices/newsLetterSlice";

const NewsLetter = ({ newsLetters }) => {
  const dispatch = useDispatch();
  const newsLetter = useSelector((state) => state?.newsLetterData?.newsLetters);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchNewsLetter());
  }, []);

  return (
    <ul>
      {newsLetters?.newsLetters?.map((newsLetter, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/newsLetters/${newsLetter._id}`} className="temp-link">
              {
                newsLetter?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">
              {handleDate(newsLetter.createdAt)}
            </p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default NewsLetter;
