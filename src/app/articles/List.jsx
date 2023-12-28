'use client'
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Pagination from '../components/Pagination'
import Article from './Article'
import { fetchArticle } from '../../redux/slices/articleSlice'

const List = () => {
 
    // const dispatch=useDispatch();

    // useEffect(()=>{
    //   dispatch(fetchArticle());
    // },[dispatch])

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
