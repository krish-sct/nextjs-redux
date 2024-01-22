import React from "react";
import TemplatePreview from "./TemplatePreview";

const TestPreview = ({ testData }) => {
  return (
    <div>
      <TemplatePreview title={"Test Preview"} templateData={testData} />
    </div>
  );
};

export default TestPreview;