"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchPressRelease } from "../../redux/slices/pressReleaseSlice";

const PressReleases = ({ pressReleases }) => {
  const dispatch = useDispatch();
  const pressRelease = useSelector(
    (state) => state?.pressReleaseData?.pressReleases
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchPressRelease());
  }, []);

  return (
    <ul>
      {pressReleases?.pressReleases?.map((pressRelease, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/pressRelease/${pressRelease._id}`} className="temp-link">
              {
                pressRelease?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
              <p className="f-r lightseagreen">
                {handleDate(pressRelease.createdAt)}
              </p>
            </a>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default PressReleases;
