import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
const Podcasts = ({ podcasts }) => {
  const podcast = useSelector((state) => state?.podcastData?.podcasts);

  const getHeader = (header) => {
    return header.value || "";
  };
  return (
    <ul>
      {podcasts?.podcasts?.map((podcast, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/podcast/${podcast._id}`}>
              {
                podcast?.components?.filter((e) => e.key === "header")?.[0]
                  ?.value
              }
            </a>
            <p className="f-r lightseagreen">{handleDate(podcast.createdAt)}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Podcasts;
