"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";
import { useDispatch } from "react-redux";
import { fetchTestimonial } from "../../redux/slices/testimonialSlice";

const Testimonial = ({ testimonials }) => {
  const dispatch = useDispatch();
  const testimonial = useSelector(
    (state) => state?.testimonialData?.testimonials
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);
  return (
    <ul>
      {testimonials?.testimonial?.map((testimonial, i) => (
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
              {handleDate(testimonial.createdAt)}
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Testimonial;
