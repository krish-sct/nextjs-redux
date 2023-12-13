import React from 'react'
import Delete from './Delete'
const Testimonial = ({ testimonials }) => {
  return (
    <div className='testimonial'>
      {testimonials?.testimonial?.map((testimonial, i) => (
        <div key={i} className='card'>
          <div className='f-r'>
            <Delete id={testimonial._id} />
          </div>
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