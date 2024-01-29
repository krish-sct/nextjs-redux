import React from "react";

const DeniedPage = ({ params }) => {
  let { role, templateData } = params;

  return (
    <div className="center-container">
      {role === "seo" ? (
        <div>
          <h1 className="success-text">
            This {templateData.slice(0, -1)} Page SEO verified.
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="success-text">
            This {templateData.slice(0, -1)} Page Denied.
          </h1>
          <div>
            <p className="not-applicable-text">
              Not applicable to {role} this page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeniedPage;
