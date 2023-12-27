import React from 'react'

const Faq = ({faqs}) => {
  return (
    <div>
      {faqs?.faqs?.map((faqs,i)=>(
        <div key={i} className='card'>
            <p>Id:{faqs._id}</p>
            <br/>
        </div>
      ))}
    </div>
  )
}

export default Faq
