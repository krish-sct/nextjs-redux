"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchPressReleaseById,
  fetchPressRelease,
} from "../../../redux/slices/pressReleaseSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";

const PressReleasesDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [pressReleaseDetails, setpressReleaseDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pressRelease = useSelector(
    (state) => state?.pressReleaseData?.pressReleases?.pressReleases
  );
  const pressReleases = useSelector(
    (state) => state?.pressReleaseData?.pressReleases?.pressReleases
  );

  const pressReleasePageDetails = useSelector(
    (state) =>
      state?.pressReleaseData?.pressReleases?.pressReleaseDetails?.pressRelease
  );

  const title = pressRelease
    ?.filter((e) => e?._id === params?.pressReleasesId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = pressRelease?.filter(
    (e) => e?._id === params?.pressReleasesId
  )[0]?.createdAt;

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
    setIsLoading(true);
    dispatch(fetchPressRelease())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching PressRelease", error);
        setIsLoading(false);
      });
  }, [dispatch]);

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
      <Breadcrumb title={title} dataTemplate={"pressRelease"} />
      <div className="list-container">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="content-margin">
              <TemplatePreview
                templateData={pressReleaseDetails}
                title={title}
                createdAt={createdAt}
              />
            </div>
            <div className="custom-margin">
              <RelatedComponent
                data={pressReleases}
                dataTemplate={"pressRelease"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PressReleasesDetails;
