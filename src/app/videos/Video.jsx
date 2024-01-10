"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../components/Videos";

const Video = () => {
  const videos = useSelector((state) => state?.videoInfo?.videos?.video);
  const [category, setCategory] = useState([]);

  const handleVideoData = (data) => {
    let video = {};
    data?.map((e, i) => {
      if (e.key === "title") video.title = e.value;
      if (e.key === "url") video.url = e.value;
      if (e.key === "category") video.category = e.value;
    });
    return video;
  };
  const handleCategory = () => {
    let data = videos?.map((e) => {
      return handleVideoData(e?.components)?.category;
    });

    let set = new Set(data);
    set = Array.from(set);
    setCategory(set);
  };
  useEffect(() => {
    if (videos?.length) {
      handleCategory();
    }
  }, [videos]);

  return (
    <div className="">
      <ul>
        <li className="menu-class">
          {category?.map((category, i) => (
            <div key={i}>{category}</div>
          ))}
        </li>
      </ul>
      <div className="flex-container">
        {videos?.map((video, i) => (
          <div key={i} className="card">
            <Videos data={handleVideoData(video?.components)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
