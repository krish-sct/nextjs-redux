import React from 'react'

const NewsLetter = ({newsLetter}) => {
  return (
    <div>
      {newsLetter?.newsLetter?.map((newsLetter,i)=>(
        <div key={i} className='card'>
            <p>Id:{newsLetter._id}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsLetter
