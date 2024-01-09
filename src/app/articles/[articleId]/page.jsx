"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import configs from "../../../utils/configs";
import TemplatePreview from "../../components/TemplatePreview";

async function generateMetadata({ params }) {
  const res = await fetch(`${configs.baseURL}/articles/${params?.articleId}`);
  console.log("response:", res);

  const post = await res.json();
  console.log(post);

  document.title = `Article - ${post.title}`;

  return {
    title: `Article - ${post.title}`,
    keywords: ["article", "post"],
    description: post.body,
  };
}

const ArticleDetails = ({ params }) => {
  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );

  const [articleDetails, setArticleDetails] = useState([]);
  const handleArticleDetails = () => {
    let data = article?.filter((e) => e?._id === params?.articleId)[0];
    setArticleDetails(data?.components || []);
  };

  useEffect(() => {
    if (article?.length) {
      handleArticleDetails();
    }
  }, [article]);

  return (
    <div>
      <h1>Article</h1>
      <TemplatePreview templateData={articleDetails} />
    </div>
  );
};

export default ArticleDetails;
