"use client";
import React from "react";
import Faq from "./Faq";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";

const List = () => {
  const faqs = useSelector((state) => state?.faqData?.faqs?.faqs);
  return (
    <div>
      <Breadcrumb dataTemplate="faqs" />

      <h1 className="text-subhead">FAQ&apos;s</h1>
      <div className="list-container">
        <Faq faqs={faqs} />
      </div>
      <br />
      <Pagination total={faqs.totalPages} current={faqs?.currentPage} />
    </div>
  );
};

export default List;
