"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import EventTradeShows from "./EventTradeShows";
import Breadcrumb from "../components/Breadcrumb";
import SideComponent from "../components/sideComponent/SideComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";

const List = () => {
  const eventTradeShows = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );
  return (
    <div>
      <Breadcrumb dataTemplate="eventTradeShows" />

      <h1 className="text-subhead">EventTradeShow</h1>
      <div className="list-container">
        <EventTradeShows eventTradeShows={eventTradeShows} />
        <div className="custom-listing">
          <SideComponent
            data={eventTradeShows}
            dataTemplate={"eventTradeShows"}
          />
        </div>
      </div>
      <FooterComponent
        data={eventTradeShows}
        dataTemplate={"eventTradeShows"}
      />
      <br />
      <Pagination
        total={eventTradeShows?.totalPages}
        current={eventTradeShows?.currentPage}
      />
    </div>
  );
};

export default List;
