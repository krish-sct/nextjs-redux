"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const FaqsDetails = ({ params }) => {
  const faq = useSelector((state) => state?.faqData?.faqs?.faqs);

  const [faqDetails, setFaqDetails] = useState([]);
  const handleFaqDetails = () => {
    let data = faq?.filter((e) => e?._id === params?.faqsId)[0];
    setFaqDetails(data?.components || []);
  };

  useEffect(() => {
    if (faq?.length && params) {
      handleFaqDetails();
    }
  }, [faq]);

  return (
    <div>
      <h1>FAQ</h1>
      <TemplatePreview templateData={faqDetails} />
    </div>
  );
};

export default FaqsDetails;
