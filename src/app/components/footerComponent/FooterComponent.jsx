"use client";
import React, { useState, useEffect } from "react";
import FooterPreview from "../FooterPreview";

const FooterComponent = ({ data, dataTemplate }) => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <h3>camera</h3>
      {isLoading ? (
        <div className="spinner"></div>
      ) : showAll ? (
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
