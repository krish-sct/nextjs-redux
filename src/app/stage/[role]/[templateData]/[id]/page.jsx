"use client";
import React, { useEffect, useState } from "react";
import { getDynamicTemplatePreview } from "../../../../../utils/apis";
import TemplatePreview from "../../../../components/TemplatePreview";
import Stage from "../../../../components/Stage";

const PreviewPage = ({ params }) => {
  const [previewData, setPreviewData] = useState(null);

  const handleTemplatePreview = async () => {
    try {
      let { templateData, id, role } = params;
      const data = await getDynamicTemplatePreview(templateData, id, role);
      // console.log("Dynamic Template data", data);
      setPreviewData(data);
    } catch (error) {
      console.error("Error fetching dynamic template preview:", error);
    }
  };

  useEffect(() => {
    handleTemplatePreview();
    // console.log({ params });
  }, []);

  return (
    <div>
      <h1> Page</h1>
      <TemplatePreview title={"Dynamic Template Preview"} />
      <Stage stageStatus={params.role} />
      {previewData && (
        <div>
          <h2>Data </h2>
          <pre>{JSON.stringify(previewData)}</pre>
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
