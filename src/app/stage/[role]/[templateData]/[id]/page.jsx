"use client";
import React, { useEffect, useState } from "react";
import { getDynamicTemplatePreview } from "../../../../../utils/apis";
import TemplatePreview from "../../../../components/TemplatePreview";
import Stage from "../../../../components/Stage";
import SEOPreview from "../../../../components/SEOPreview";
import TestPreview from "../../../../components/TestPreview";
import { handleCase } from "../../../../../utils/common";

const PreviewPage = ({ params }) => {
  const [stagingData, setStagingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  let { templateData, id, role } = params;

  const handleTemplatePreview = async () => {
    try {
      const data = await getDynamicTemplatePreview(templateData, id, role);
      console.log("Dynamic Template data", data);
      setStagingData(data);
    } catch (error) {
      console.error("Error fetching dynamic template preview:", error);
    }
  };

  const handleSessionTime = () => {
    let sessionTime = Date.now();
    let expiryTime = sessionTime + process.env.SessionValidityTime;
    if (expiryTime < sessionTime) {
      setIsExpired(true);
      setIsLoading(false);
    } else {
      console.log("valid ");
    }
  };

  useEffect(() => {
    handleTemplatePreview();
    handleSessionTime();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      {isLoading ? (
        <div className="spinner"></div>
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
