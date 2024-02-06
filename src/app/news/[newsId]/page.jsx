"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchNewsById, fetchNews } from "../../../redux/slices/newsSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";

const NewsDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [newsDetails, setNewsDetails] = useState([]);

  const newses = useSelector((state) => state?.newsData?.news?.news);

  const news = useSelector((state) => state?.newsData?.news?.news);

  const newsPageDetails = useSelector(
    (state) => state?.newsData?.news?.newsDetails?.newses?.components
  );

  const title = newses
    ?.filter((e) => e?._id === params?.newsId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = newses?.filter((e) => e?._id === params?.newsId)[0]
    ?.createdAt;

  const handleNewsDetails = () => {
    let data = newses?.filter((e) => e?._id === params?.newsId)[0];
    setNewsDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchNewsById(params.newsId));
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

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
      <Breadcrumb title={title} dataTemplate={"news"} />
      <div className="list-container">
        <div className="content-margin">
          <TemplatePreview
            templateData={newsDetails}
            title={title}
            createdAt={createdAt}
          />
        </div>
        <div className="custom-margin">
          <RelatedComponent data={news} dataTemplate={"news"} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
