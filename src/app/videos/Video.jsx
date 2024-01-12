"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../components/Videos";
import SEO from "../components/SEO";
import { useDispatch } from "react-redux";
import { fetchVideoUrl } from "../../redux/slices/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state?.videoInfo?.videos?.video);
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState("All");
  const handleVideoData = (data, selected) => {
    let video = {};
    data?.map((e, i) => {
      if (e.key === "title") video.title = e.value;
      if (e.key === "url") video.url = e.value;
      if (e.key === "category") video.category = e.value;
      if (e.key === "seo") video.seo = e.value;
    });
    if (selected === "All" || video.category === selected) return video;
    else return null;
  };
  const handleCategory = (videoData) => {
    let data = videoData?.map((e) => {
      return handleVideoData(e?.components, selected)?.category;
    });

    let set = new Set(data);
    set = Array.from(set);
    setCategory(["All", ...set]);
  };

  useEffect(() => {
    dispatch(fetchVideoUrl());
  }, []);

  useEffect(() => {
    if (videos?.length) {
      handleCategory(videos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  return (
    <div className="">
      <ul>
        <li className="menu-class">
          {category?.map((category, i) => (
            <div
              key={i}
              className={`menu-category ${
                selected === category ? "menu-selected" : ""
              }`}
              onClick={() => {
                setSelected(category);
              }}
            >
              {category}
            </div>
          ))}
        </li>
      </ul>
      <div className="flex-container">
        {videos?.map((video, i) => {
          let data = handleVideoData(video?.components, selected);
          return data ? (
            <div key={i}>
              <Videos data={data} />
              <SEO data={data.seo} title={"Videos"} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Video;
