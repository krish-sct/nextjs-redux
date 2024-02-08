import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDateString } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchNewsLetter } from "../../redux/slices/newsLetterSlice";

const NewsLetter = ({ newsLetters }) => {
  const dispatch = useDispatch();

  const [ishighlighted, setIsHighlighted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [LatestData, setLatestData] = useState([]);
  const [imgWidth, setImgWidth] = useState(null);

  const newsLetter = useSelector(
    (state) => state?.newsLetterData?.newsLetters?.newsLetters
  );

  useEffect(() => {
    const sortedData = newsLetters
      ?.slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

    setLatestData(sortedData);
  }, [newsLetters]);

  const getHeader = (header) => {
    return header.value || "";
  };


  const handleImageLoad = (e) => {
    setImgWidth(e.target.width);
  };

  useEffect(() => {
    setIsHighlighted(true);
    setIsLoading(true);
    dispatch(fetchNewsLetter());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && LatestData && (
        <div className="card">
          <a href={`/newsLetters/${LatestData._id}`} className="temp-link">
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
                      onLoad={handleImageLoad}
                    />
                  ))}
              </div>
            )}
            <div className="f-r color-navy">
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

export default NewsLetter;
