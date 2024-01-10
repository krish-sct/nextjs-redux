"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Video from "./Video";

const List = () => {
  const videos = useSelector((state) => state?.videoInfo?.videos);
  return (
    <div>
      <h1 className="text-center ">Videos</h1>
      <Video />
      <br />
      <Pagination total={videos?.totalPages} current={videos?.currentPage} />
    </div>
  );
};

export default List;
