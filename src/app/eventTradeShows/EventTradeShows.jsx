import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchEventTradeShow } from "../../redux/slices/eventTradeShowsSlice";

const EventTradeShows = ({ eventTradeShows }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(true);

  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );
  // console.log(eventTradeShow);

  const createdAtTime = eventTradeShows?.map(
    (eventTradeShow, i) => eventTradeShow?.createdAt
  );
  // console.log(createdAtTime);

  const createdAtTimeCopy = [...createdAtTime];

  const sortedByLatest = createdAtTimeCopy.sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // console.log(sortedByLatest);

  const latestEventTradeShows = eventTradeShows?.find(
    (eventTradeShow) => eventTradeShow.createdAt === sortedByLatest[0] || null
  );
  // console.log(latestEventTradeShows);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchEventTradeShow());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && latestEventTradeShows && (
        <div className="card">
          <a
            href={`/eventTradeShows/${eventTradeShow._id}`}
            className="temp-link"
          >
            {latestEventTradeShows?.components?.filter(
              (e) => e.key === "mainImg"
            )?.length > 0 && (
              <div className="images">
                {latestEventTradeShows.components
                  .find((e) => e.key === "mainImg")
                  ?.mainImgs?.map((img, imgI) => (
                    <img
                      className="images-imgs"
                      src={img?.src}
                      alt={img?.alt}
                      key={imgI}
                    />
                  ))}
              </div>
            )}
            <div className="f-r color-navy ">
              {handleDateString(latestEventTradeShows.createdAt)}
            </div>
            <br />
            <div className="list-header">
              {
                latestEventTradeShows?.components?.filter(
                  (e) => e.key === "header"
                )?.[0]?.value
              }
            </div>
            <div className="listing-description">
              {
                latestEventTradeShows?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="color-navy">
              {
                latestEventTradeShows?.components?.filter(
                  (e) => e.key === "subTitle"
                )?.[0]?.value
              }
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default EventTradeShows;
