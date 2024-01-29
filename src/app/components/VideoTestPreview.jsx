import React, { useEffect } from "react";
import Videos from "./Videos";

const VideoTestPreview = ({ videoTestData, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

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
      <Videos data={handleVideoData(videoTestData)} title={"Test Preview"} />
    </div>
  );
};

export default VideoTestPreview;
