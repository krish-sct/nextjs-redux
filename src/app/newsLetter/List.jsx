'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import NewsLetter from './NewsLetter'

const List = () => {
    const newsLetter=useSelector((state)=>state?.newsLetterData?.newsLetter)

  return (
    <div>
        <h1>NewsLetter</h1>
        <NewsLetter newsLetter={newsLetter} />
        <br/>
        <Pagination total={newsLetter?.totalPages} current={newsLetter?.currentPage} />

    </div>
  )
}

export default List
