import React from "react";

const SEOPreview = ({ seoData }) => {
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
    </div>
  );
};

export default SEOPreview;
