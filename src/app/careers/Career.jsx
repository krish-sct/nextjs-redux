import React from 'react'

const Careers = ({careers}) => {
  return (
    <div>
      {careers?.careers?.map((careers,i)=>(
        <div key={i} className='card'>
            <p>Id:{careers._id}</p>
        </div>
      ))}
    </div>
  )
}

export default Careers