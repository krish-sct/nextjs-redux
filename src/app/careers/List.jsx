"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Career from "./Career";
import Breadcrumb from "../components/Breadcrumb";
import SideComponent from "../components/sideComponent/SideComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const List = () => {
  const careers = useSelector((state) => state?.careerData?.careers?.careers);
  return (
    <div>
      <Breadcrumb dataTemplate="careers" />
      <h1 className="text-subhead">Careers</h1>
      <div className="list-container">
        <Career careers={careers} />
        <div className="custom-listing">
          <SideComponent data={careers} dataTemplate={"careers"} />
        </div>
      </div>
      <FooterComponent data={careers} dataTemplate={"careers"} />
      <br />
      <Pagination total={careers?.totalPages} current={careers?.currentPage} />
    </div>
  );
};

export default List;
