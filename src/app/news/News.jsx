import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/slices/newsSlice";

const News = ({ news }) => {
  const dispatch = useDispatch();
  const newses = useSelector((state) => state?.newsData?.news);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <ul>
      {news?.news?.map((newses, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/news/${newses._id}`}>
              {
                newses?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">{handleDate(newses.createdAt)}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default News;
