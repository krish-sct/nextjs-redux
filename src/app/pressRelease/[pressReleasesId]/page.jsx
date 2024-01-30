"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchPressReleaseById,
  fetchPressRelease,
} from "../../../redux/slices/pressReleaseSlice";

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
    dispatch(fetchPressRelease());
  }, []);

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
      <h1 className="text-head">PressRelease</h1>
      <TemplatePreview
        templateData={pressReleaseDetails}
        title={"PressReleases"}
      />
    </div>
  );
};

export default PressReleasesDetails;
