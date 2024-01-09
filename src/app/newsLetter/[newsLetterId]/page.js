"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const NewsLetterDetails = ({ params }) => {
  const newsLetters = useSelector(
    (state) => state?.newsLetterData?.newsLetter?.newsLetter
  );

  const [newsLetterDetails, setNewsLetterDetails] = useState([]);
  const handleNewsLetterDetails = () => {
    let data = newsLetters?.filter((e) => e?._id === params?.newsLetterId)[0];
    setNewsLetterDetails(data?.components || []);
  };

  useEffect(() => {
    if (newsLetters?.length && params) {
      handleNewsLetterDetails();
    }
  }, [newsLetters]);

  return (
    <div>
      <h1>NewsLetter</h1>
      <TemplatePreview templateData={newsLetterDetails} />
    </div>
  );
};

export default NewsLetterDetails;
