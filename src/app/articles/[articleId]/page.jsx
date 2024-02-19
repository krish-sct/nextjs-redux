"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchArticleById,
  fetchArticle,
} from "../../../redux/slices/articleSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";
import Error from "../error";

const ArticleDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [articleDetails, setArticleDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const article = useSelector(
    (state) => state?.articleData?.articles?.articles
  );

  const articles = useSelector(
    (state) => state?.articleData?.articles?.articles
  );

  const articlePageDetails = useSelector(
    (state) => state?.articleData?.articles?.articleDetails?.article?.components
  );

  let title = article
    ?.filter((e) => e?._id === params?.articleId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = article?.filter((e) => e?._id === params?.articleId)[0]
    ?.createdAt;

  const handleArticleDetails = () => {
    let data = article?.filter((e) => e?._id === params?.articleId)[0];
    setArticleDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchArticleById(params.articleId));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchArticle())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in  fetching article", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

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
      <Breadcrumb title={title} dataTemplate={"articles"} />
      <div className="list-container">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="content-margin">
              <TemplatePreview
                templateData={articleDetails}
                title={title}
                createdAt={createdAt}
              />
            </div>
            <div className="custom-margin">
              <RelatedComponent data={articles} dataTemplate={"articles"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
