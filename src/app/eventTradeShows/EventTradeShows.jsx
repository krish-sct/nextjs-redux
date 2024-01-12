import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchEventTradeShow } from "../../redux/slices/eventTradeShowsSlice";

const EventTradeShows = ({ eventTradeShows }) => {
  const dispatch = useDispatch();
  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchEventTradeShow());
  }, []);

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
