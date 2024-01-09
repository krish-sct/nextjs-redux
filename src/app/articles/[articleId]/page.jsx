"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchArticleById } from "../../../redux/slices/articleSlice";

const ArticleDetails = ({ params }) => {
  const dispatch = useDispatch();
  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );
  console.log({ article });
  const articlePageDetails = useSelector(
    (state) => state?.articleData?.articles?.articleDetails
  );
  console.log({ articlePageDetails });
  const [articleDetails, setArticleDetails] = useState([]);
  const handleArticleDetails = () => {
    let data = article?.filter((e) => e?._id === params?.articleId)[0];
    setArticleDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchArticleById(params.articleId));
  };

  useEffect(() => {
    if (article?.length && params) {
      handleArticleDetails();
    }
  }, [article]);

  useEffect(() => {
    if (articlePageDetails?.length && params) {
      getDetailsById();
    }
  }, [articlePageDetails, params]);

  return (
    <div>
      <h1>Article</h1>
      <TemplatePreview templateData={articleDetails} />
    </div>
  );
};

export default ArticleDetails;
