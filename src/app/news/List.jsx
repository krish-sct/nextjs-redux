"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import News from "./News";

const List = () => {
  const news = useSelector((state) => state?.newsData?.news);

  return (
    <div>
      <h1 className="text-head">News</h1>
      <News news={news} />
      <br />
      <Pagination total={news?.totalPages} current={news?.currentPage} />
    </div>
  );
};

export default List;
