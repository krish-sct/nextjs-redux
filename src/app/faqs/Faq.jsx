"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchFaq } from "../../redux/slices/faqSlice";

const Faq = ({ faqs }) => {
  const dispatch = useDispatch();
  const faq = useSelector((state) => state?.faqData?.faqs);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchFaq());
  }, []);

  return (
    <ul>
      {faqs?.faqs?.map((faq, i) => (
        <div key={i} className="card">
          <li>
            {
              faq?.components?.filter((e) => e.key === "description")?.[0]
                ?.value
            }
            <div className="f-r lightseagreen">{handleDate(faq.createdAt)}</div>
          </li>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default Faq;
