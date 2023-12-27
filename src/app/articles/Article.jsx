import React from 'react'

const Articles = ({articles}) => {
  return (
    <div>
      {articles?.articles?.map((articles,i)=>(
        <div key={i} className='card'>
            <p>Id:{articles._id}</p>
            <br/>
            <p>Date:{articles.createdAt}</p>
        </div>
      ))}
    </div>
  )
}

export default Articles