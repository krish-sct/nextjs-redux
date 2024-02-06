"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Podcast from "./Podcast";
import Breadcrumb from "../components/Breadcrumb";
import SideComponent from "../components/sideComponent/SideComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const List = () => {
  const podcasts = useSelector(
    (state) => state?.podcastData?.podcasts?.podcasts
  );

  return (
    <div>
      <Breadcrumb dataTemplate="podcast" />
      <h1 className="text-subhead text-black">Vision Vitals: The Podcast</h1>
      <p className="text-gray">
        Welcome to Vision Vitals - e-con Systems' exclusive podcast series.
      </p>
      <div className="list-container">
        <Podcast podcasts={podcasts} />
        <div className="custom-listing">
          <SideComponent data={podcasts} dataTemplate={"podcast"} />
        </div>
      </div>
      <FooterComponent data={podcasts} dataTemplate={"podcast"} />
      <br />
      <Pagination
        total={podcasts?.totalPages}
        current={podcasts?.currentPage}
      />
    </div>
  );
};

export default List;
