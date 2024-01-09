"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const PressReleasesDetails = ({ params }) => {
  const pressRelease = useSelector(
    (state) => state?.pressReleaseData?.pressReleases?.pressReleases
  );

  const [pressReleaseDetails, setpressReleaseDetails] = useState([]);
  const handlepressReleaseDetails = () => {
    let data = pressRelease?.filter(
      (e) => e?._id === params?.pressReleasesId
    )[0];
    setpressReleaseDetails(data?.components || []);
  };

  useEffect(() => {
    if (pressRelease?.length) {
      handlepressReleaseDetails();
    }
  }, [pressRelease]);
  return (
    <div>
      <h1></h1>
      <TemplatePreview templateData={pressReleaseDetails} />
    </div>
  );
};

export default PressReleasesDetails;
