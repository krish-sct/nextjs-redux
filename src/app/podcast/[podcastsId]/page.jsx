"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchPodcastById } from "../../../redux/slices/podcastSlice";

const PodcastsDetails = ({ params }) => {
  const dispatch = useDispatch();
  const podcasts = useSelector(
    (state) => state?.podcastData?.podcasts?.podcasts
  );

  const podcastsPageDetails = useSelector(
    (state) => state?.podcastData?.podcasts?.podcastDetails?.podcast?.components
  );

  const [podcastsDetails, setPodcastDetails] = useState([]);
  const handlePodcastDetails = () => {
    let data = podcasts?.filter((e) => e?._id === params?.podcastsId)[0];
    setPodcastDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchPodcastById(params.podcastsId));
  };

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
      <h1>Podcasts</h1>
      <TemplatePreview templateData={podcastsDetails} title={"Podcast"} />
    </div>
  );
};

export default PodcastsDetails;
