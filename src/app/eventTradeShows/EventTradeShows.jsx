import React from 'react'

const EventTradeShows = ({eventTradeShows}) => {
  return (
    <div>
      {eventTradeShows?.eventTradeShows?.map((eventTradeShows,i)=>(
        <div key={i} className='card'>
            <p>Id:{eventTradeShows._id}</p>
        </div>
      ))}
    </div>
  )
}

export default EventTradeShows