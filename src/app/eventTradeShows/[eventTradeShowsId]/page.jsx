"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchEventTradeShowById,
  fetchEventTradeShow,
} from "../../../redux/slices/eventTradeShowsSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";

const EventTradeShowsDetails = ({ params }) => {
  const dispatch = useDispatch();

  const [eventTradeShowDetails, setEventTradeShowDetails] = useState([]);

  const eventTradeShow = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const eventTradeShows = useSelector(
    (state) => state?.eventTradeShowsData?.eventTradeShows?.eventTradeShows
  );

  const eventTradeShowPageDetails = useSelector(
    (state) =>
      state?.eventTradeShowsData?.eventTradeShows?.eventTradeShowDetails
        ?.eventTradeShow?.components
  );

  let title = eventTradeShow
    ?.filter((e) => e?._id === params?.eventTradeShowsId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = eventTradeShow?.filter(
    (e) => e?._id === params?.eventTradeShowsId
  )[0]?.createdAt;

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
      <Breadcrumb title={title} dataTemplate={"eventTradeShows"} />

      <div className="list-container">
        <div className="content-margin">
          <TemplatePreview
            templateData={eventTradeShowDetails}
            title={"EventTradeShow"}
            createdAt={createdAt}
          />
        </div>
        <div className="custom-margin">
          <RelatedComponent
            data={eventTradeShows}
            dataTemplate={"eventTradeShows"}
          />
        </div>
      </div>
    </div>
  );
};

export default EventTradeShowsDetails;
