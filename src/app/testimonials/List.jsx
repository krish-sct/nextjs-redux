"use client";
import React from "react";
import Pagination from "../components/Pagination";
import Testimonial from "./Testimonial";
import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";

const List = () => {
  const testimonials = useSelector(
    (state) => state?.testimonialData?.testimonials?.testimonial
  );
  return (
    <div>
      <Breadcrumb dataTemplate="testimonials" />
      <h1 className="text-subhead">Customer Testimonials</h1>
      <div className="list-container">
        <Testimonial testimonials={testimonials} />
      </div>
      <br />
      <Pagination
        total={testimonials?.totalPages}
        current={testimonials?.currentPage}
      />
    </div>
  );
};

export default List;
