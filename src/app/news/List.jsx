"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import News from "./News";
import Breadcrumb from "../components/Breadcrumb";
import FooterComponent from "../components/footerComponent/FooterComponent";
import SideComponent from "../components/sideComponent/SideComponent";

const List = () => {
  const news = useSelector((state) => state?.newsData?.news?.news);
  // console.log(news)

  return (
    <div>
      <Breadcrumb dataTemplate="news" />
      <h1 className="text-subhead">News</h1>
      <div className="list-container">
        <News news={news} />
        <div className="custom-listing">
          <SideComponent data={news} dataTemplate={"news"} />
        </div>
      </div>
      <FooterComponent data={news} dataTemplate={"news"} />
      <br />
      <Pagination total={news?.totalPages} current={news?.currentPage} />
    </div>
  );
};

export default List;
