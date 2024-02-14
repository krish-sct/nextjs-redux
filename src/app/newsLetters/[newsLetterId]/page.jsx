"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchNewsLetterById,
  fetchNewsLetter,
} from "../../../redux/slices/newsLetterSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";

const NewsLetterDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [newsLetterDetails, setNewsLetterDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newsLetter = useSelector(
    (state) => state?.newsLetterData?.newsLetters?.newsLetters
  );
  const newsLetters = useSelector(
    (state) => state?.newsLetterData?.newsLetters?.newsLetters
  );

  const newsLetterPageDetails = useSelector(
    (state) =>
      state?.newsLetterData?.newsLetters?.newsLetterDetails?.newsLetter
        ?.components
  );

  const title = newsLetter
    ?.filter((e) => e?._id === params?.newsLetterId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = newsLetter?.filter(
    (e) => e?._id === params?.newsLetterId
  )[0]?.createdAt;

  const handleNewsLetterDetails = () => {
    let data = newsLetter?.filter((e) => e?._id === params?.newsLetterId)[0];
    setNewsLetterDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchNewsLetterById(params.newsLetterId));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchNewsLetter())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching NewsLetter", error);
        setIsLoading(false);
      });
  }, [dispatch]);

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
      <Breadcrumb title={title} dataTemplate={"newsLetters"} />
      <div className="list-container">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="content-margin">
              <TemplatePreview
                templateData={newsLetterDetails}
                title={title}
                createdAt={createdAt}
              />
            </div>
            <div className="custom-margin">
              <RelatedComponent
                data={newsLetters}
                dataTemplate={"newsLetters"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsLetterDetails;
