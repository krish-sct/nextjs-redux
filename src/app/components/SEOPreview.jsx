"use client";
import React, { useState } from "react";
import { updateTemplateStaging } from "../../utils/apis";

const SEOPreview = ({ title, seoData, stagingData, templateData }) => {
  const [seoSuggestionMsg, setSEOSuggestionMsg] = useState("");
  const [isSEOVerified, setIsSEOVerified] = useState(true);

  const handleSEO = async () => {
    setIsSEOVerified(true);
    try {
      const id = stagingData?._id;
      const updatedData = {
        _id: stagingData?._id,
        staging: {
          ...stagingData?.staging,
          isSEOVerified: true,
          seoMsg: { msg: seoSuggestionMsg || "seo msg" },
        },
      };
      setSEOSuggestionMsg("");
      const response = await updateTemplateStaging({
        data: { _id: stagingData?._id, updatedData },
        templateData,
      });
      console.log("Template staging ", response);
    } catch (error) {
      console.error("Error in template staging:", error);
    }
  };

  const handleCancel = async () => {
    setIsSEOVerified(false);
  };
  return (
    <div className="preview-wrapper">
      <h3>SEO Preview</h3>
      <div>
        value:
        <p className="text-class">{seoData?.value || "No value"}</p>
      </div>
      <div>
        MetaDescription:
        <p className="text-class">
          {seoData?.metaDescription || "No MetaDescription"}
        </p>
      </div>

      <div>
        CanonicalLink:
        <p className="text-class">
          {seoData?.canonicalLink || "No Canonical Link "}
        </p>
      </div>
      <div>
        ImagePreviewUrl:
        <p className="text-class">{seoData?.imagePreviewUrl || "No Data"}</p>
      </div>
      <div>
        Keywords:
        {seoData?.keywords?.map((e, i) => (
          <p key={i} className="text-class">
            {e}
          </p>
        )) || "No Keywords"}
      </div>

      <div>
        {isSEOVerified && (
          <div>
            <textarea
              type="text"
              placeholder="SEO Suggestion...."
              value={seoSuggestionMsg}
              onChange={(e) => setSEOSuggestionMsg(e.target.value)}
            />
            <button onClick={handleSEO}>Verify</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOPreview;
