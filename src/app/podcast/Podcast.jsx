import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDate, handleDateString } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchPodcast } from "../../redux/slices/podcastSlice";

const Podcasts = ({ podcasts }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(true);
  const [LatestData, setLatestData] = useState([]);

  const podcast = useSelector(
    (state) => state?.podcastData?.podcasts?.podcasts
  );

  useEffect(() => {
    const sortedData = podcasts
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

    setLatestData(sortedData);
  }, [podcasts]);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchPodcast());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && LatestData && (
        <div>
          <a href={`/podcast/${LatestData._id}`} className="temp-link">
            {LatestData?.components?.filter((e) => e.key === "mainImg")
              ?.length > 0 && (
              <div className="images">
                {LatestData.components
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
              {handleDateString(LatestData.createdAt)}
            </div>
            <br />
            <div className="list-header">
              {
                LatestData?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </div>
            <div className="listing-description">
              {
                LatestData?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="color-navy">
              {
                LatestData?.components?.filter((e) => e.key === "subTitle")?.[0]
                  ?.value
              }
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Podcasts;
