import React, { useState } from "react";
import { updateTemplateStaging } from "../../utils/apis";

const Stage = ({ stageStatus, templateData, stagingData }) => {
  // console.log(stageStatus, templateData, stagingData);

  const [denyMsg, setDenyMsg] = useState("");
  const [isDeny, setIsDeny] = useState(false);

  const handleDeny = async () => {
    setIsDeny(true);
  };

  const handleCancel = async () => {
    setIsDeny(false);
  };

  const handleOk = async () => {
    setIsDeny(true);
    try {
      const id = stagingData?._id;
      const updatedData = {
        _id: stagingData?._id,
        staging: {
          ...stagingData?.staging,
          isDenied: true,
          denyMsg: { msg: denyMsg || "Denied successfully" },
          previewSessionTime: null,
        },
      };
      setDenyMsg("");
      // alert(updatedData.staging.denyMsg.msg);
      console.log(updatedData);

      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      console.log("Template staging ", response);
    } catch (error) {
      console.error("Error in template staging:", error);
    }
  };

  const handlePreview = async () => {
    try {
      const id = stagingData?._id;
      // console.log(id);

      const updatedData = {
        _id: stagingData?._id,
        staging: {
          ...stagingData?.staging,
          isPreview: true,
          previewSessionTime: null,
          publishSessionTime: Date.now(),
        },
      };
      // console.log({ updatedData });

      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      console.log("Template staging updated:", response);
    } catch (error) {
      console.error("Error in template staging:", error);
    }
  };

  const handlePublish = async () => {
    try {
      const id = stagingData?._id;
      // console.log(id);
      const updatedData = {
        _id: stagingData?._id,
        components: stagingData?.staging?.previewComponent,
        staging: {
          ...stagingData?.staging,
          previewComponent: [],
          isPublish: true,
          publishSessionTime: null,
          oldComponent: stagingData.components,
        },
      };

      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      console.log("Template staging updated:", response);
    } catch (error) {
      console.error("Error updating template staging:", error);
    }
  };

  const handleSEO = async () => {
    console.log("SEO");
  };

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

      {isDeny && (
        <div>
          <input
            type="text"
            placeholder="Type message"
            value={denyMsg}
            onChange={(e) => setDenyMsg(e.target.value)}
          />
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleOk}>Ok</button>
        </div>
      )}
    </div>
  );
};

export default Stage;
