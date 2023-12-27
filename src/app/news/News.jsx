import React from 'react'

const News = ({news}) => {
  return (
    <div>
      {news?.news?.map((news,i)=>(
        <div key={i} className='card'>
            <p>Id:{news._id}</p>
        </div>
      ))}
    </div>
  )
}

export default News