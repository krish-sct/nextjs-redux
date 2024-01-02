'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Master from './Master'

const List = () => {
    const masters=useSelector((state)=>state?.masterData)
    console.log("masters",{masters});
    return (
     <div>
      <h3>Master</h3>
      <Master masters={masters} />
      </div>
  )
}

export default List