import React from "react";
import { useSelector } from "react-redux";
import { handleDate } from "../../utils/common";

const Testimonial = ({ testimonials }) => {
  const testimonial = useSelector(
    (state) => state?.testimonialData?.testimonials
  );

  const getHeader = (header) => {
    return header.value || "";
  };

  return (
    <ul>
      {testimonials?.testimonial?.map((testimonial, i) => (
        <div key={i} className="card">
          <li>
            {
              testimonial?.components?.filter(
                (e) => e.key === "description"
              )?.[0]?.value
            }
            <p className="f-r lightseagreen">
              {handleDate(testimonial.createdAt)}
            </p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Testimonial;
