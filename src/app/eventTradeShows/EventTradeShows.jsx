import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchEventTradeShow } from "../../redux/slices/eventTradeShowsSlice";
import Error from "../error";

const EventTradeShows = ({ eventTradeShows }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [ishighlighted, setIsHighlighted] = useState(true);
  const [LatestData, setLatestData] = useState([]);
  const [imgWidth, setImgWidth] = useState(null);

  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  useEffect(() => {
    const sortedData = eventTradeShows
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

    setLatestData(sortedData);
  }, [eventTradeShows]);

  const getHeader = (header) => {
    return header.value || "";
  };

  const handleImageLoad = (e) => {
    setImgWidth(e.target.width);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchEventTradeShow())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching EventTradeShow", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        ishighlighted &&
        LatestData && (
          <div className="card">
            <a
              href={`/eventTradeShows/${LatestData._id}`}
              className="temp-link"
            >
              {LatestData?.components?.filter((e) => e.key === "images")
                ?.length > 0 && (
                <div className="images">
                  {LatestData.components.find((e) => e.key === "images")
                    ?.imgs?.[0] && (
                    <img
                      className="images-imgs"
                      src={
                        LatestData.components.find((e) => e.key === "images")
                          ?.imgs[0]?.src
                      }
                      alt={
                        LatestData.components.find((e) => e.key === "images")
                          ?.imgs[0]?.alt
                      }
                      onLoad={handleImageLoad}
                    />
                  )}
                </div>
              )}
              <div className="f-r color-navy ">
                {handleDateString(LatestData.createdAt)}
              </div>
              <br />
              <div className="list-header" style={{ width: imgWidth }}>
                {
                  LatestData?.components?.filter((e) => e.key === "header")?.[0]
                    ?.value
                }
              </div>
              <div className="listing-description" style={{ width: imgWidth }}>
                {
                  LatestData?.components?.filter(
                    (e) => e.key === "description"
                  )?.[0]?.value
                }
              </div>
              <div className="color-navy">
                {
                  LatestData?.components?.filter(
                    (e) => e.key === "subTitle"
                  )?.[0]?.value
                }
              </div>
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default EventTradeShows;
