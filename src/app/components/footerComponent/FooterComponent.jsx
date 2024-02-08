"use client";
import React, { useState } from "react";
import FooterPreview from "../FooterPreview";

const FooterComponent = ({ data, dataTemplate }) => {
  const [showAll, setShowAll] = useState(false);

  const getHeader = (header) => {
    return header.value || "";
  };

  return (
    <div>
      <hr />
      <h3>camera</h3>
      {showAll ? (
        <div className="footerComp-container ">
          <FooterPreview data={data} dataTemplate={dataTemplate} />
        </div>
      ) : (
        <div>
          <div className="footerComp-container hidden ">
            <FooterPreview data={data} dataTemplate={dataTemplate} />
          </div>
          <br />
          <div className="viewmore">
            <button className="viewmore-btn" onClick={() => setShowAll(true)}>
              View More.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterComponent;
