"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchPressReleaseById } from "../../../redux/slices/pressReleaseSlice";

const PressReleasesDetails = ({ params }) => {
  const dispatch = useDispatch();
  const pressRelease = useSelector(
    (state) => state?.pressReleaseData?.pressReleases?.pressReleases
  );

  const pressReleasePageDetails = useSelector(
    (state) =>
      state?.pressReleaseData?.pressReleases?.pressReleaseDetails?.pressRelease
        ?.components
  );

  const [pressReleaseDetails, setpressReleaseDetails] = useState([]);
  const handlepressReleaseDetails = () => {
    let data = pressRelease?.filter(
      (e) => e?._id === params?.pressReleasesId
    )[0];
    setpressReleaseDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchPressReleaseById(params.pressReleasesId));
  };

  useEffect(() => {
    if (pressRelease?.length && params) {
      handlepressReleaseDetails();
      getDetailsById();
    }
  }, [pressRelease]);

  useEffect(() => {
    if (pressReleasePageDetails?.length) {
      setpressReleaseDetails(pressReleasePageDetails || []);
    }
  }, [pressReleasePageDetails]);

  return (
    <div>
      <h1></h1>
      <TemplatePreview
        templateData={pressReleaseDetails}
        title={"PressRelease"}
      />
    </div>
  );
};

export default PressReleasesDetails;
