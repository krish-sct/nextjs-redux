import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchPodcast } from "../../redux/slices/podcastSlice";

const Podcasts = ({ podcasts }) => {
  const dispatch = useDispatch();
  const podcast = useSelector((state) => state?.podcastData?.podcasts);

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchPodcast());
  }, []);

  return (
    <ul>
      {podcasts?.podcasts?.map((podcast, i) => (
        <div key={i} className="card">
          <li>
            <a href={`/podcast/${podcast._id}`} className="temp-link">
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
