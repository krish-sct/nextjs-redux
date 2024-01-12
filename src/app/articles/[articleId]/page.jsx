"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchArticleById,
  fetchArticle,
} from "../../../redux/slices/articleSlice";

const ArticleDetails = ({ params }) => {
  const dispatch = useDispatch();

  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );

  const articlePageDetails = useSelector(
    (state) => state?.articleData?.articles?.articleDetails?.article?.components
  );

  const [articleDetails, setArticleDetails] = useState([]);

  const handleArticleDetails = () => {
    let data = article?.filter((e) => e?._id === params?.articleId)[0];
    setArticleDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchArticleById(params.articleId));
  };

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  useEffect(() => {
    if (article?.length && params) {
      handleArticleDetails();
      getDetailsById();
    }
  }, [article]);

  useEffect(() => {
    if (articlePageDetails?.length) {
      setArticleDetails(articlePageDetails || []);
    }
  }, [articlePageDetails]);

  return (
    <div>
      <h1>Article</h1>
      <TemplatePreview templateData={articleDetails} title={"Article"} />
    </div>
  );
};

export default ArticleDetails;
