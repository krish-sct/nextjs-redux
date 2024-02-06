"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import NewsLetter from "./NewsLetter";
import Breadcrumb from "../components/Breadcrumb";
import SideComponent from "../components/sideComponent/SideComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const List = () => {
  const newsLetters = useSelector(
    (state) => state?.newsLetterData?.newsLetters?.newsLetters
  );
  return (
    <div>
      <Breadcrumb dataTemplate="newsLetters" />
      <h1 className="text-subhead">e-con News Letters</h1>
      <div className="list-container">
        <NewsLetter newsLetters={newsLetters} />
        <div className="custom-listing">
          <SideComponent data={newsLetters} dataTemplate={"newsLetters"} />
        </div>
      </div>
      <FooterComponent data={newsLetters} dataTemplate={"newsLetters"} />
      <br />
      <Pagination
        total={newsLetters?.totalPages}
        current={newsLetters?.currentPage}
      />
    </div>
  );
};

export default List;
