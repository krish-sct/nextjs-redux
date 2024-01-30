"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { fetchCareer } from "../../redux/slices/careerSlice";
import { useDispatch } from "react-redux";

const Careers = ({ careers }) => {
  const dispatch = useDispatch();
  const career = useSelector((state) => state?.careerData?.careers);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchCareer());
  }, []);

  return (
    <ul>
      {careers?.careers?.map((career, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/careers/${career._id}`} className="temp-link">
              {
                career?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">{handleDate(career.createdAt)}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Careers;
