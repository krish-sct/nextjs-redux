"use client";
import React from "react";

const Videos = ({ data, title }) => {
  const handleURL = () => {
    let url = data?.url?.split("/");

    return "https://www.youtube.com/embed/" + url?.[url?.length - 1] || "";
  };
  return (
    <div className="flex-item">
      <div>
        <iframe className="" allowFullScreen={true} src={handleURL()}></iframe>
        <br />
        <div className="description">{data?.title}</div>
      </div>
    </div>
  );
};

export default Videos;
