import React from 'react'

const Podcasts = ({podcasts}) => {
  return (
    <div>
      {podcasts?.podcasts?.map((podcasts,i)=>(
        <div key={i} className='card'>
            <p>Id:{podcasts._id}</p>
        </div>
      ))}
    </div>
  )
}

export default Podcasts
