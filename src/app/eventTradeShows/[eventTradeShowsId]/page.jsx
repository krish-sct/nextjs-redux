"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const EventTradeShowsDetails = ({ params }) => {
  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const [eventTradeShowDetails, setEventTradeShowDetails] = useState([]);
  const handleEventTradeShowDetails = () => {
    let data = eventTradeShow?.filter(
      (e) => e?._id === params?.eventTradeShowsId
    )[0];
    setEventTradeShowDetails(data?.components || []);
  };

  useEffect(() => {
    if (eventTradeShow?.length) {
      handleEventTradeShowDetails();
    }
  }, [eventTradeShow]);

  return (
    <div>
      <TemplatePreview templateData={eventTradeShowDetails} />
    </div>
  );
};

export default EventTradeShowsDetails;
