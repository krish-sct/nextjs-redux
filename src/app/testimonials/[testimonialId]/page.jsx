"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const TestimonialDetails = ({ params }) => {
  const testimonial = useSelector(
    (state) => state?.testimonialData?.testimonials?.testimonial
  );

  const [testimonialDetails, setTestimonialDetails] = useState([]);
  const handleTestimonialDetails = () => {
    let data = testimonial?.filter((e) => e?._id === params?.testimonialId)[0];
    setTestimonialDetails(data?.components || []);
  };

  useEffect(() => {
    if (testimonial?.length && params) {
      handleTestimonialDetails();
    }
  }, [testimonial]);

  return (
    <div>
      <h1>Testimonial</h1>
      <TemplatePreview templateData={testimonialDetails} />
    </div>
  );
};

export default TestimonialDetails;
