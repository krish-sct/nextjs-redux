"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleDate, handleDateString } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchTestimonial } from "../../redux/slices/testimonialSlice";

const Testimonial = ({ testimonials }) => {
  const dispatch = useDispatch();

  const testimonial = useSelector(
    (state) => state?.testimonialData?.testimonials?.testimonial
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);

  return (
    <ul>
      {testimonials?.map((testimonial, i) => (
        <div key={i} className="card">
          <li>
            <div>
              {
                testimonial?.components?.filter(
                  (e) => e.key === "description"
                )?.[0]?.value
              }
            </div>
            <div className="f-r lightseagreen">
              {
                testimonial?.components?.filter(
                  (e) => e.key === "subTitle"
                )?.[0]?.value
              }
              <br />
            </div>
            <br />
            <div className="f-r lightseagreen">
              {handleDateString(testimonial.createdAt)}
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Testimonial;
