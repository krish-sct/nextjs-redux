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
            {
              faq?.components?.filter((e) => e.key === "description")?.[0]
                ?.value
            }
            <p className="f-r lightseagreen">{handleDate(faq.createdAt)}</p>
          </li>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default Faq;
