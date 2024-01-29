"use client";
import React, { useState, useEffect } from "react";
import { updateTemplateStaging } from "../../utils/apis";

const SEOPreview = ({ title, seoData, stagingData, templateData, role }) => {
  const [seoSuggestionMsg, setSEOSuggestionMsg] = useState("");
  const [isSEOVerified, setIsSEOVerified] = useState(true);

  useEffect(() => {
    document.title = title;
  }, [title]);

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
      alert(`you verified this ${templateData.slice(0, -1)} page.`);
      window.close();
      window.open(`/stage/${role}/${templateData}`);
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
        <p className="text-class">{seoData?.value || "No value"}</p>
      </div>

      <div className="">
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
