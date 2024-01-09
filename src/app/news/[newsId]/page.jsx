"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchNewsById } from "../../../redux/slices/newsSlice";

const NewsDetails = ({ params }) => {
  const dispatch = useDispatch();
  const newses = useSelector((state) => state?.newsData?.news?.news);

  const newsPageDetails = useSelector(
    (state) => state?.newsData?.news?.newsDetails?.newses?.components
  );

  const [newsDetails, setNewsDetails] = useState([]);
  const handleNewsDetails = () => {
    let data = newses?.filter((e) => e?._id === params?.newsId)[0];
    setNewsDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchNewsById(params.newsId));
  };

  useEffect(() => {
    if (newses?.length && params) {
      handleNewsDetails();
      getDetailsById();
    }
  }, [newses]);

  useEffect(() => {
    if (newsPageDetails?.length) {
      setNewsDetails(newsPageDetails || []);
    }
  }, [newsPageDetails]);
  return (
    <div>
      <h1>News</h1>
      <TemplatePreview templateData={newsDetails} title={"News"} />
    </div>
  );
};

export default NewsDetails;
