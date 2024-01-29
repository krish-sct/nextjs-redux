"use client";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import EventTradeShows from "./EventTradeShows";

const List = () => {
  const eventTradeShows = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows
  );

  return (
    <div>
      <h1 className="text-head">EventTradeShow</h1>
      <EventTradeShows eventTradeShows={eventTradeShows} />
      <br />
      <Pagination
        total={eventTradeShows?.totalPages}
        current={eventTradeShows?.currentPage}
      />
    </div>
  );
};

export default List;
