import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const Faq = ({ faqs }) => {
  const faq = useSelector((state) => state?.faqData?.faqs);

  const getHeader = (header) => {
    return header.value || "";
  };

  return (
    <ul>
      {faqs?.faqs?.map((faq, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/faqs/${faq._id}`}>
              {faq?.components?.filter((e) => e.key === "header")?.[0]?.value}
            </a>
            <p className="f-r lightseagreen">{handleDate(faq.createdAt)}</p>
          </li>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default Faq;
