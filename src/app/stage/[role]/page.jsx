import React from "react";

export const metadata = {
  title: "Success Page",
};

const PreviewedPage = ({ params }) => {
  let { role } = params;
  return (
    <div className="center-container">
      <h1 className="success-text"> {role}ed </h1>
    </div>
  );
};

export default PreviewedPage;
