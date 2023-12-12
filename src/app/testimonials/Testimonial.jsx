import React from 'react'

const Testimonial = ({ testimonials }) => {
  return (
    <div className='testimonial'>
      {testimonials?.testimonial?.map((testimonial, i) => (
        <div key={i} className='card'>
          <p>{testimonial.description}</p>
          <div className='f-r lightseagreen'>
            {testimonial.person},
          </div>
          <br />
          <div className='f-r lightseagreen'>
            {testimonial.company}
          </div>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Testimonial