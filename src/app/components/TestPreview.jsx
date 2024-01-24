import React from "react";
import TemplatePreview from "./TemplatePreview";

const TestPreview = ({ testData, title }) => {
  return (
    <div>
      <TemplatePreview title={"Test Preview"} templateData={testData} />
    </div>
  );
};

export default TestPreview;
