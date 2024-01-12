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
          <p>

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
          </p>
        </div>
      ))}
    </ul>
  );
};

export default Testimonial;
