"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Video from "./Video";
import Breadcrumb from "../components/Breadcrumb";

const List = () => {
  const videos = useSelector((state) => state?.videoInfo?.videos?.video);
  return (
    <div>
      <Breadcrumb dataTemplate="videos" data={videos} />
      <h1 className="text-subhead">Videos</h1>
      <div className="list-container">
        <Video />
      </div>

      <br />
      <Pagination total={videos?.totalPages} current={videos?.currentPage} />
    </div>
  );
};

export default List;
