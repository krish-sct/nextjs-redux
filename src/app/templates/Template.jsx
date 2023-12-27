import React from 'react'

const Templates = ({templates}) => {
  return (
    <div>
      {templates?.templates?.map((templates,i)=>(
        <div key={i} className='card'>
            <p>Id:{templates._id}</p>
        </div>
      ))}
    </div>
  )
}

export default Templates