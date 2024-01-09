import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const EventTradeShows = ({ eventTradeShows }) => {
  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  return (
    <ul>
      {eventTradeShows?.eventTradeShows?.map((eventTradeShow, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/eventTradeShows/${eventTradeShow._id}`}>
              {
                eventTradeShow?.components?.filter(
                  (e) => e.key === "header"
                )?.[0]?.value
              }
            </a>
            <p className="f-r lightseagreen">
              {handleDate(eventTradeShow.createdAt)}
            </p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default EventTradeShows;
