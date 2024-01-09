"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchNewsLetterById } from "../../../redux/slices/newsLetterSlice";

const NewsLetterDetails = ({ params }) => {
  const dispatch = useDispatch();
  const newsLetters = useSelector(
    (state) => state?.newsLetterData?.newsLetter?.newsLetter
  );

  const newsLetterPageDetails = useSelector(
    (state) =>
      state?.newsLetterData?.newsLetter?.newsLetterDetails?.newsLetters
        ?.components
  );

  const [newsLetterDetails, setNewsLetterDetails] = useState([]);
  const handleNewsLetterDetails = () => {
    let data = newsLetters?.filter((e) => e?._id === params?.newsLetterId)[0];
    setNewsLetterDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchNewsLetterById(params.newsLetterId));
  };

  useEffect(() => {
    if (newsLetters?.length && params) {
      handleNewsLetterDetails();
      getDetailsById();
    }
  }, [newsLetters]);

  useEffect(() => {
    if (newsLetterPageDetails?.length) {
      setNewsLetterDetails(newsLetterPageDetails || []);
    }
  }, [newsLetterPageDetails]);
  return (
    <div>
      <h1>NewsLetter</h1>
      <TemplatePreview templateData={newsLetterDetails} title={"NewsLetter"} />
    </div>
  );
};

export default NewsLetterDetails;
