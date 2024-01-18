import React from "react";

const Stage = ({ stageStatus, templateData }) => {
  const handleDeny = async () => {};

  const handlePreview = async () => {};

  const handleSEO = async () => {};

  const handlePublish = async () => {};

  const handleStage = async () => {
    if (stageStatus == "preview") {
      handlePreview();
    }
    if (stageStatus == "publish") {
      handlePublish();
    }
    if (stageStatus == "seo") {
      handleSEO();
    }
  };
  return (
    <div>
      <button onClick={handleDeny}>Deny</button>
      <button onClick={handleStage}>{stageStatus}</button>
    </div>
  );
};

export default Stage;
