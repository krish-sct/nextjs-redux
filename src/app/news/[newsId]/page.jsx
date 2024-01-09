"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import configs from "../../../utils/configs";
import TemplatePreview from "../../components/TemplatePreview";

async function generateMetadata() {
  const res = await fetch(`${configs.baseURL}/news/${news._id}`);

  const post = await res.json();
  console.log(post);
  return {
    title: `News - ${post.title}`,
    keywords: ["news", "post"],
    description: post.body,
  };
}

const NewsDetails = ({ params }) => {
  const newses = useSelector((state) => state?.newsData?.news?.news);

  const [newsDetails, setNewsDetails] = useState([]);
  const handleNewsDetails = () => {
    let data = newses?.filter((e) => e?._id === params?.newsId)[0];
    setNewsDetails(data?.components || []);
  };

  useEffect(() => {
    if (newses?.length && params) {
      handleNewsDetails();
    }
  }, [newses]);

  return (
    <div>
      <h1>News</h1>
      <TemplatePreview templateData={newsDetails} />
    </div>
  );
};

export default NewsDetails;
