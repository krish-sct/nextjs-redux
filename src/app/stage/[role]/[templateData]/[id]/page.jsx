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
// import configs from "../../../../../utils/configs";

const PreviewPage = ({ params }) => {
  const [stagingData, setStagingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isDeny, setIsDeny] = useState(false);

  let { templateData, id, role } = params;

  const handleDenied = (staging) => {
    return staging?.isDenied;
  };

  const handleRole = (staging) => {
    if (role === "preview") {
      return staging?.isPreview;
    }
    if (role === "publish") {
      return staging?.isPublish;
    }
    if (role === "seo") {
      return staging?.isSEOVerified;
    }
    return false;
  };

  const handleTemplatePreview = async () => {
    try {
      let Id = params?.id?.split("-")[0];
      const data = await getDynamicTemplatePreview(templateData, Id, role);
      console.log("dynamic data", data);
      if (handleSessionTime(data?.[handleCase(templateData)]?.staging)) {
        setIsExpired(true);
      } else if (handleDenied(data?.[handleCase(templateData)]?.staging)) {
        setIsDeny(true);
      } else if (handleRole(data?.[handleCase(templateData)]?.staging)) {
        setIsDone(true);
      } else {
        setStagingData(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error in fetching:", error);
      setIsLoading(false);
    }
  };

  const handleSessionTime = () => {
    let currentTime = Date.now();
    let sessionTime = params?.id?.split("-")[1];
    let expiryTime = Number(sessionTime) + Number(1800000);
    //Number(sessionTime) + Number(Number(configs.SessionValidityTime) * 60 * 1000);

    if (currentTime < expiryTime) {
      return false;
    } else {
      console.log("Expired");
      return true;
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
      ) : isDeny ? (
        <div className="text-done">{`Already ${templateData.slice(
          0,
          -1
        )} denied`}</div>
      ) : isDone ? (
        <div className="text-done">{`Already ${role}ed`}</div>
      ) : (
        <>
          {isExpired ? (
            <div className="text-timeout">Time out </div>
          ) : role === "seo" ? (
            <div>
              <SEOPreview
                title={"SEO"}
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
