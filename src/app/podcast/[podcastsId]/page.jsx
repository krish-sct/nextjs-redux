"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const PodcastsDetails = ({ params }) => {
  const podcasts = useSelector(
    (state) => state?.podcastData?.podcasts?.podcasts
  );

  const [podcastsDetails, setPodcastDetails] = useState([]);
  const handlePodcastDetails = () => {
    let data = podcasts?.filter((e) => e?._id === params?.podcastsId)[0];
    setPodcastDetails(data?.components || []);
  };

  useEffect(() => {
    if (podcasts?.length && params) {
      handlePodcastDetails();
    }
  }, [podcasts]);
  return (
    <div>
      <h1>Podcasts</h1>
      <TemplatePreview templateData={podcastsDetails} />
    </div>
  );
};

export default PodcastsDetails;
