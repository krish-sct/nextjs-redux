"use client";
import React from "react";
import Pagination from "../components/Pagination";
import Testimonial from "./Testimonial";
import { useSelector } from "react-redux";

const List = () => {
  const testimonials = useSelector(
    (state) => state?.testimonialData?.testimonials
  );

  return (
    <div>
      <h1 className="text-subhead">Customer Testimonials</h1>
      <Testimonial testimonials={testimonials} />
      <br />
      <Pagination
        total={testimonials?.totalPages}
        current={testimonials?.currentPage}
      />
    </div>
  );
};

export default List;
