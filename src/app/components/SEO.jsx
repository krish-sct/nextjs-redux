"use client";
import React, { useEffect } from "react";

const SEO = ({ data, title }) => {
  useEffect(() => {
    if (data) {
      const pageDescription = data;
      document.title = title;
      // Find and update the existing description meta tag
      const existingDescriptionMeta = document.querySelector(
        'meta[name="keywords"]'
      );
      if (existingDescriptionMeta) {
        existingDescriptionMeta.setAttribute("content", pageDescription);
      } else {
        // Create a new description meta tag
        const descriptionMeta = document.createElement("meta");
        descriptionMeta.name = "keywords";
        descriptionMeta.content = pageDescription;
        document.head.appendChild(descriptionMeta);
      }
    }
  }, [data, title]);
  return <></>;
};

export default SEO;
