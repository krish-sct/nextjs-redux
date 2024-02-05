"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Article from "./Article";
import Link from "next/link";
import SideComponent from "../components/sideComponent/SideComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";
import Breadcrumb from "../components/Breadcrumb";

const List = () => {
  const articles = useSelector(
    (state) => state?.articleData?.articles?.articles
  );
  return (
    <div>
      {/* <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator">{" > "}</span>
        <Link href="/articles">Articles</Link>
      </div> */}
      <Breadcrumb dataTemplate="articles" />

      <h1 className="text-subhead">Articles</h1>
      <div className="list-container">
        <Article articles={articles} />
        <div className="custom-listing">
          <SideComponent data={articles} dataTemplate={"articles"} />
        </div>
      </div>
      <FooterComponent data={articles} dataTemplate={"articles"} />
      <br />
      <Pagination
        total={articles?.totalPages}
        current={articles?.currentPage}
      />
    </div>
  );
};

export default List;
