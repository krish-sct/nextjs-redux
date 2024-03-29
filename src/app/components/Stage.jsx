import React, { useState } from "react";
import { updateTemplateStaging } from "../../utils/apis";
import Error from "../error";
const Stage = ({ stageStatus, templateData, stagingData, role }) => {
  const [denyMsg, setDenyMsg] = useState("");
  const [isDeny, setIsDeny] = useState(false);
  const [suggestionMsg, setSuggestionMsg] = useState("");
  const [isSuggest, setIsSuggest] = useState(true);

  const handleDeny = async () => {
    setIsDeny(true);
  };

  const handleCancel = async () => {
    setIsDeny(false);
    setIsSuggest(false);
  };

  const handleSubmit = async () => {
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

      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      alert(`you Denied this ${templateData.slice(0, -1)} page.`);
      window.close();
      window.open(`/stage/${role}/${templateData}`);
      console.log("Template staging ", response);
    } catch (error) {
      console.error("Error in template staging:", error);
      <Error />;
    }
  };

  const handlePreview = async () => {
    setIsSuggest(true);
    try {
      const id = stagingData?._id;

      const updatedData = {
        _id: stagingData?._id,
        staging: {
          ...stagingData?.staging,
          isPreview: true,
          previewSessionTime: null,
          publishSessionTime: Date.now(),
          suggestion: {
            newSuggestion: { msg: suggestionMsg || "" },
            oldSuggestion: {
              msg: stagingData?.staging?.suggestion?.liveSuggestion?.msg || "",
            },
            liveSuggestion: {
              msg: stagingData?.staging?.suggestion?.newSuggestion?.msg || "",
            },
          },
        },
      };
      setSuggestionMsg("");

      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      alert(`Confirm to ${role}?`);
      window.close();
      window.open(`/stage/${role}`);
      console.log("Template staging updated:", response);
    } catch (error) {
      console.error("Error in template staging:", error);
      <Error />;
    }
  };

  const handlePublish = async () => {
    try {
      const id = stagingData?._id;
      const updatedData = {
        _id: stagingData?._id,
        components: stagingData?.staging?.previewComponent,
        staging: {
          ...stagingData?.staging,
          previewComponent: [],
          isPublish: true,
          publishSessionTime: null,
          oldComponent: stagingData.components,
          suggestion: {
            newSuggestion: { msg: "" || "" },
            oldSuggestion: {
              msg: stagingData?.staging?.suggestion?.liveSuggestion?.msg || "",
            },
            liveSuggestion: {
              msg: stagingData?.staging?.suggestion?.newSuggestion?.msg || "",
            },
          },
        },
      };
      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      alert(`Confirm to ${role}?`);
      window.close();
      window.open(`/stage/${role}`);
      console.log("Template staging updated:", response);
    } catch (error) {
      <Error />;
      console.error("Error updating template staging:", error);
    }
  };

  const handleStage = async () => {
    if (stageStatus == "preview") {
      handlePreview();
    }
    if (stageStatus == "publish") {
      handlePublish();
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {isSuggest && (
        <div>
          {stageStatus === "preview" && (
            <div>
              <textarea
                type="text"
                placeholder="Suggestion...."
                value={suggestionMsg}
                onChange={(e) => setSuggestionMsg(e.target.value)}
              />
              <br />
              <button onClick={handleCancel}>Suggestion Cancel</button>
              <br />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Stage;
