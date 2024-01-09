"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchTestimonialById } from "../../../redux/slices/testimonialSlice";

const TestimonialDetails = ({ params }) => {
  const dispatch = useDispatch();
  const testimonial = useSelector(
    (state) => state?.testimonialData?.testimonials?.testimonial
  );

  const testimonialPageDetails = useSelector(
    (state) =>
      state?.testimonialData?.testimonials?.testimonialDetails?.testimonial
        ?.components
  );

  const [testimonialDetails, setTestimonialDetails] = useState([]);
  const handleTestimonialDetails = () => {
    let data = testimonial?.filter((e) => e?._id === params?.testimonialId)[0];
    setTestimonialDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchTestimonialById(params.testimonialId));
  };

  useEffect(() => {
    if (testimonial?.length && params) {
      handleTestimonialDetails();
      getDetailsById();
    }
  }, [testimonial]);

  useEffect(() => {
    if (testimonialPageDetails?.length) {
      setTestimonialDetails(testimonialPageDetails || []);
    }
  }, [testimonialPageDetails]);

  return (
    <div>
      <h1>Testimonial</h1>
      <TemplatePreview
        templateData={testimonialDetails}
        title={"Testimonial"}
      />
    </div>
  );
};

export default TestimonialDetails;
