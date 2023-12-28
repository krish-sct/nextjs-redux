'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import Article from './Article'

const List = () => {

    const articles=useSelector((state)=>state?.articleData?.articles)
    console.log("Articles:",articles);

  return (
    <div>
        <h1>Articles</h1>
        <Article articles={articles} />
        <br/>
        <Pagination total={articles?.totalPages} current={articles?.currentPage} />
    </div>
  )
}

export default List
