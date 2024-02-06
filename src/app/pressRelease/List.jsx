"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import SideComponent from "../components/sideComponent/SideComponent";
import Breadcrumb from "../components/Breadcrumb";
import FooterComponent from "../components/footerComponent/FooterComponent";
import PressRelease from "./pressRelease";

const List = () => {
  const pressReleases = useSelector(
    (state) => state?.pressReleaseData?.pressReleases?.pressReleases
  );

  return (
    <div>
      <Breadcrumb dataTemplate="pressRelease" />
      <h1 className="text-subhead">Press Releases</h1>
      <div className="list-container">
        <PressRelease pressReleases={pressReleases} />
        <div className="custom-listing">
          <SideComponent data={pressReleases} dataTemplate={"pressRelease"} />
        </div>
      </div>
      <FooterComponent data={pressReleases} dataTemplate={"pressRelease"} />
      <br />
      <Pagination
        total={pressReleases?.totalPages}
        current={pressReleases?.currentPage}
      />
    </div>
  );
};

export default List;
