"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import NewsLetter from "./NewsLetter";

const List = () => {
  const newsLetters = useSelector(
    (state) => state?.newsLetterData?.newsLetters
  );

  return (
    <div>
      <h1>NewsLetter</h1>
      <NewsLetter newsLetters={newsLetters} />
      <br />
      <Pagination
        total={newsLetters?.totalPages}
        current={newsLetters?.currentPage}
      />
    </div>
  );
};

export default List;
