"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchPodcastById,
  fetchPodcast,
} from "../../../redux/slices/podcastSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";
import Error from "../../error";

const PodcastsDetails = ({ params }) => {
  const dispatch = useDispatch();

  const [podcastsDetails, setPodcastDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const podcasts = useSelector(
    (state) => state?.podcastData?.podcasts?.podcasts
  );

  const title = podcasts
    ?.filter((e) => e?._id === params?.podcastsId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = podcasts?.filter((e) => e?._id === params?.podcastsId)[0]
    ?.createdAt;

  const podcastsPageDetails = useSelector(
    (state) => state?.podcastData?.podcasts?.podcastDetails?.podcast?.components
  );

  const handlePodcastDetails = () => {
    let data = podcasts?.filter((e) => e?._id === params?.podcastsId)[0];
    setPodcastDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchPodcastById(params.podcastsId));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPodcast())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Podcast", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (podcasts?.length && params) {
      handlePodcastDetails();
      getDetailsById();
    }
  }, [podcasts]);

  useEffect(() => {
    if (podcastsPageDetails?.length) {
      setPodcastDetails(podcastsPageDetails || []);
    }
  }, [podcastsPageDetails]);

  return (
    <div>
      <Breadcrumb title={title} dataTemplate={"podcast"} />
      <div className="list-container">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="content-margin">
              <TemplatePreview
                templateData={podcastsDetails}
                title={title}
                createdAt={createdAt}
              />
            </div>
            <div className="custom-margin">
              <RelatedComponent data={podcasts} dataTemplate={"podcast"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PodcastsDetails;
