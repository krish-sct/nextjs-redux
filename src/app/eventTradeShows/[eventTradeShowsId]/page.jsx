"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchEventTradeShowById,
  fetchEventTradeShow,
} from "../../../redux/slices/eventTradeShowsSlice";

const EventTradeShowsDetails = ({ params }) => {
  const dispatch = useDispatch();
  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const eventTradeShowPageDetails = useSelector(
    (state) =>
      state?.eventTradeShowsData?.eventTradeShows?.eventTradeShowDetails
        ?.eventTradeShow?.components
  );

  const [eventTradeShowDetails, setEventTradeShowDetails] = useState([]);
  const handleEventTradeShowDetails = () => {
    let data = eventTradeShow?.filter(
      (e) => e?._id === params?.eventTradeShowsId
    )[0];
    setEventTradeShowDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchEventTradeShowById(params.eventTradeShowsId));
  };

  useEffect(() => {
    dispatch(fetchEventTradeShow());
  }, []);

  useEffect(() => {
    if (eventTradeShow?.length && params) {
      handleEventTradeShowDetails();
      getDetailsById();
    }
  }, [eventTradeShow]);

  useEffect(() => {
    if (eventTradeShowPageDetails?.length) {
      setEventTradeShowDetails(eventTradeShowPageDetails || []);
    }
  }, [eventTradeShowPageDetails]);

  return (
    <div>
      <TemplatePreview
        templateData={eventTradeShowDetails}
        title={"EventTradeShows"}
      />
    </div>
  );
};

export default EventTradeShowsDetails;
