"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Testimonial from "./Testimonial";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import { fetchTestimonial } from "../../redux/slices/testimonialSlice";
import Error from "../error";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const testimonials = useSelector(
    (state) => state?.testimonialData?.testimonials?.testimonial
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTestimonial())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching PressRelease", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div>
      <Breadcrumb dataTemplate="testimonials" />
      <h1 className="text-subhead">Customer Testimonials</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div className="list-container">
            <Testimonial testimonials={testimonials} />
          </div>
          <br />
        </>
      )}

      <Pagination
        total={testimonials?.totalPages}
        current={testimonials?.currentPage}
      />
    </div>
  );
};

export default List;
