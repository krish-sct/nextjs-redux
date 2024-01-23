import React from "react";
import Videos from "./Videos";

const VideoTestPreview = ({ videoTestData }) => {
  const handleVideoData = (data) => {
    let video = {};
    data?.map((e) => {
      if (e.key === "title") video.title = e.value;
      if (e.key === "url") video.url = e.value;
      if (e.key === "category") video.category = e.value;
      if (e.key === "seo") video.seo = e.value;
    });
    return video;
  };
  return (
    <div>
      <Videos data={handleVideoData(videoTestData)} />
    </div>
  );
};

export default VideoTestPreview;
