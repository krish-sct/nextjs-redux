'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import Podcast from './Podcast'

const List = () => {
    const podcasts=useSelector((state)=>state?.podcastData?.podcasts)

  return (
    <div>
        <h1>Podcasts</h1>
        <Podcast podcasts={podcasts} />
        <br/>
        <Pagination total={podcasts?.totalPages} current={podcasts?.currentPage} />

    </div>
  )
}

export default List
