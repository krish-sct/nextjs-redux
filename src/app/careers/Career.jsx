import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const Careers = ({ careers }) => {
  const career = useSelector((state) => state?.careerData?.careers);

  const getHeader = (header) => {
    return header.value || "";
  };

  return (
    <ul>
      {careers?.careers?.map((career, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/careers/${career._id}`}>
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
