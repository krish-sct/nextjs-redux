"use client";
import React, { useEffect, useState } from "react";
import { getDynamicTemplatePreview } from "../../../../../utils/apis";
import TemplatePreview from "../../../../components/TemplatePreview";
import Stage from "../../../../components/Stage";
import SEOPreview from "../../../../components/SEOPreview";
import TestPreview from "../../../../components/TestPreview";
import { handleCase } from "../../../../../utils/common";
import VideoPreview from "../../../../components/VideoPreview";
import VideoTestPreview from "../../../../components/VideoTestPreview";

const PreviewPage = ({ params }) => {
  const [stagingData, setStagingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isHandleSucceed, setIsHandleSucceed] = useState(false);
  let { templateData, id, role } = params;

  const handleRole = (staging) => {
    if (role === "preview") {
      setIsHandleSucceed(true);
      return !staging?.isPreview;
    }
    if (role === "publish") {
      setIsHandleSucceed(true);
      return !staging?.isPublish;
    }
    if (role === "seo") {
      setIsHandleSucceed(true);
      return !staging?.isSEOVerified;
    }
    return true;
  };

  const handleTemplatePreview = async () => {
    try {
      const data = await getDynamicTemplatePreview(templateData, id, role);
      console.log("Dynamic Template data", data);
      setIsLoading(false);
      if (handleRole(data?.[handleCase(templateData)]?.staging)) {
        setStagingData(data);
      } else if (handleSessionTime(data?.[handleCase(templateData)]?.staging)) {
      } else {
        setIsDone(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error in fetching:", error);
      setIsLoading(false);
    }
  };

  const handleSessionTime = () => {
    let currentTime = Date.now();
    let id = parseInt(params.id.split("-")[0]);
    let sessionTime = parseInt(params.id.split("-")[1]);
    // console.log("sessionTime", sessionTime);
    let expiryTime = sessionTime + process.env.SessionValidityTime * 60 * 1000;
    // console.log("expiryTime", expiryTime);
    if (currentTime < expiryTime) {
      setIsExpired(true);
    } else {
      console.log("valid ");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    handleTemplatePreview();
  }, []);

  return (
    <div>
      <h1>Role Page</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : isDone ? (
        <div className="text-done">{`Already ${role}ed`}</div>
      ) : (
        <>
          {isExpired ? (
            <div>Time out </div>
          ) : role === "seo" ? (
            <div>
              <SEOPreview
                seoData={
                  stagingData?.[handleCase(templateData)]?.staging?.isPublish
                    ? stagingData?.[
                        handleCase(templateData)
                      ]?.components?.filter((e) => e.key === "seo")?.[0]
                    : stagingData?.[
                        handleCase(templateData)
                      ]?.staging?.previewComponent?.filter(
                        (e) => e.key === "seo"
                      )?.[0]
                }
                templateData={params.templateData}
                stagingData={stagingData?.[handleCase(templateData)]}
              />
            </div>
          ) : role === "test" && templateData === "videos" ? (
            <div>
              <VideoTestPreview
                videoTestData={
                  stagingData?.[handleCase(templateData)]?.staging?.isPublish
                    ? stagingData?.[handleCase(templateData)]?.components
                    : stagingData?.[handleCase(templateData)]?.staging
                        ?.previewComponent
                }
              />
            </div>
          ) : role === "test" ? (
            <div>
              <TestPreview
                testData={
                  stagingData?.[handleCase(templateData)]?.staging?.isPublish
                    ? stagingData?.[handleCase(templateData)]?.components
                    : stagingData?.[handleCase(templateData)]?.staging
                        ?.previewComponent
                }
              />
            </div>
          ) : templateData === "videos" ? (
            <>
              <VideoPreview
                title={"Dynamic Template Preview"}
                videoData={
                  role === "preview" &&
                  stagingData?.[handleCase(templateData)]?.staging?.isPreview
                    ? []
                    : stagingData?.[handleCase(templateData)]?.staging
                        ?.previewComponent || []
                }
                stageStatus={params.role}
                templateData={params.templateData}
                stagingData={stagingData?.[handleCase(templateData)]}
              />
            </>
          ) : (
            <>
              <TemplatePreview
                title={"Dynamic Template Preview"}
                templateData={
                  role === "preview" &&
                  stagingData?.[handleCase(templateData)]?.staging?.isPreview
                    ? []
                    : stagingData?.[handleCase(templateData)]?.staging
                        ?.previewComponent || []
                }
              />
              <Stage
                stageStatus={params.role}
                templateData={params.templateData}
                stagingData={stagingData?.[handleCase(templateData)]}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PreviewPage;
