'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import Career from './Career'

const List = () => {
    const careers=useSelector((state)=>state?.careerData?.careers)
  
  return (
    <div>
        <h1>Careers</h1>
        <Career careers={careers} />
        <br/>
        <Pagination total={careers?.totalPages} current={careers?.currentPage} />

    </div>
  )
}

export default List
