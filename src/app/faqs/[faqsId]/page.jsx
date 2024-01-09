"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchFaqById } from "../../../redux/slices/faqSlice";

const FaqsDetails = ({ params }) => {
  const dispatch = useDispatch();
  const faq = useSelector((state) => state?.faqData?.faqs?.faqs);

  const faqPageDetails = useSelector(
    (state) => state?.faqData?.faqs?.FaqsDetails?.faq?.components
  );

  const [faqDetails, setFaqDetails] = useState([]);
  const handleFaqDetails = () => {
    let data = faq?.filter((e) => e?._id === params?.faqsId)[0];
    setFaqDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchFaqById(params.faqsId));
  };

  useEffect(() => {
    if (faq?.length && params) {
      handleFaqDetails();
      getDetailsById();
    }
  }, [faq]);

  useEffect(() => {
    if (faqPageDetails?.length) {
      setFaqDetails(faqPageDetails || []);
    }
  }, [faqPageDetails]);

  return (
    <div>
      <h1>FAQ</h1>
      <TemplatePreview templateData={faqDetails} title={"FAQ"} />
    </div>
  );
};

export default FaqsDetails;
