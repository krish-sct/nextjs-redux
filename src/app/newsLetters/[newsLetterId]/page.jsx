"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchNewsLetterById,
  fetchNewsLetter,
} from "../../../redux/slices/newsLetterSlice";

const NewsLetterDetails = ({ params }) => {
  const dispatch = useDispatch();
  const newsLetter = useSelector(
    (state) => state?.newsLetterData?.newsLetters?.newsLetters
  );

  const newsLetterPageDetails = useSelector(
    (state) =>
      state?.newsLetterData?.newsLetters?.newsLetterDetails?.newsLetter
        ?.components
  );

  const [newsLetterDetails, setNewsLetterDetails] = useState([]);
  const handleNewsLetterDetails = () => {
    let data = newsLetter?.filter((e) => e?._id === params?.newsLetterId)[0];
    setNewsLetterDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchNewsLetterById(params.newsLetterId));
  };

  useEffect(() => {
    dispatch(fetchNewsLetter());
  }, []);

  useEffect(() => {
    if (newsLetter?.length && params) {
      handleNewsLetterDetails();
      getDetailsById();
    }
  }, [newsLetter]);

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
