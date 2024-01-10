"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../components/Videos";

const Video = () => {
  const videos = useSelector((state) => state?.videoInfo?.videos?.video);
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState('All')
  const handleVideoData = (data, selected) => {
    let video = {};
    data?.map((e, i) => {
      if (e.key === "title") video.title = e.value;
      if (e.key === "url") video.url = e.value;
      if (e.key === "category") video.category = e.value;
    });
    if (selected === 'All' || video.category === selected)
    return video;
    else return null
  };
  const handleCategory = () => {
    let data = videos?.map((e) => {
      return handleVideoData(e?.components)?.category;
    });

    let set = new Set(data);
    set = Array.from(set);
    setCategory(['All', ...set]);
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
            <div key={i} className={`menu-category ${selected === category ? 'menu-selected' : ''}`} onClick={() => { setSelected(category) }}>{category}</div>
          ))}
        </li>
      </ul>
      <div className="flex-container">
        {videos?.map((video, i) => {
          let data = handleVideoData(video?.components, selected)
          return data ? <div key={i}>
            <Videos data={data} />
          </div> : ''
        })}
      </div>
    </div>
  );
};

export default Video;
