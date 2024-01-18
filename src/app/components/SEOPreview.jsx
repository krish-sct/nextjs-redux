import React from "react";

const SEOPreview = ({ seoData }) => {
  return (
    <div className="preview-wrapper">
      <h3>SEO Preview</h3>
      <div>
        {seoData?.map((e, i) => {
          return (
            <div key={i}>
              {e?.key === "seo" ? (
                <div>
                  <h2 className="header">{e?.value}</h2>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SEOPreview;
