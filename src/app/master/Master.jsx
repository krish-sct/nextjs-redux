import React from 'react'

const Master = ({data}) => {

  return (
    <div>
      {data?.masterData?.map((master,i)=>(
        <div key={i} className='card'>
          {master.type==='contactus' ?
          (
            <div className=''>
               <p>Id:{master._id}</p>
            </div>
          ):
          (
            <div className='f-r lightseagreen'>
             <p>Type may vary </p>
            </div>
          )}
          <br/>
        </div>
      ))}
    </div>
  )
}

export default Master
