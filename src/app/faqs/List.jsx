"use client";
import React, { useEffect, useState } from "react";
import Faq from "./Faq";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import { fetchFaq } from "../../redux/slices/faqSlice";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const faqs = useSelector((state) => state?.faqData?.faqs?.faqs);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchFaq())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching PressRelease", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div>
      <Breadcrumb dataTemplate="faqs" />

      <h1 className="text-subhead">FAQ&apos;s</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="list-container">
            <Faq faqs={faqs} />
          </div>
          <br />
        </>
      )}
      <Pagination total={faqs.totalPages} current={faqs?.currentPage} />
    </div>
  );
};

export default List;
