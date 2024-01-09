import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const PressReleases = ({ pressReleases }) => {
  const pressRelease = useSelector(
    (state) => state?.pressReleaseData?.pressReleases
  );

  const getHeader = (header) => {
    return header.value || "";
  };
  return (
    <ul>
      {pressReleases?.pressReleases?.map((pressRelease, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/pressRelease/${pressRelease._id}`}>
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
