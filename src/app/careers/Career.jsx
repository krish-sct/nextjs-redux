"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDate, handleDateString } from "../../utils/common";
import { fetchCareer } from "../../redux/slices/careerSlice";
import { useDispatch } from "react-redux";

const Careers = ({ careers }) => {
  const dispatch = useDispatch();
  const [ishighlighted, setIsHighlighted] = useState(true);

  const career = useSelector((state) => state?.careerData?.careers?.careers);
  // console.log(career);

  const createdAtTime = careers?.map((career, i) => career?.createdAt);
  // console.log(createdAtTime);

  const createdAtTimeCopy = [...createdAtTime];
  // console.log(createdAtTimeCopy);

  const sortedByLatest = createdAtTimeCopy.sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const latestCareers = careers?.find(
    (career) => career.createdAt === sortedByLatest[0] || null
  );

  // console.log(latestCareers);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchCareer());
  }, []);

  return (
    <div>
      <hr />
      <h4 className="hr">Highlighted</h4>
      {ishighlighted && latestCareers && (
        <div className="card">
          <a href={`/careers/${latestCareers._id}`} className="temp-link">
            {latestCareers?.components?.filter((e) => e.key === "mainImg")
              ?.length > 0 && (
              <div className="images">
                {latestCareers.components
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
              {handleDateString(latestCareers.createdAt)}
            </div>
            <br />
            <div className="list-header">
              {
                latestCareers?.components?.filter(
                  (e) => e.key === "header"
                )?.[0]?.value
              }
            </div>
            <div className="listing-description">
              {
                latestCareers?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="color-navy">
              {
                latestCareers?.components?.filter(
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

export default Careers;
