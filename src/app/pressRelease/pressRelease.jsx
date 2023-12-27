import React from 'react'

const PressReleases = ({pressReleases}) => {
  return (
    <div>
      {pressReleases?.pressReleases?.map((pressReleases,i)=>(
        <div key={i} className='card'>
            <p>Id:{pressReleases._id}</p>
        </div>
      ))}
    </div>
  )
}

export default PressReleases
