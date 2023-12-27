'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import PressRelease from './pressRelease'

const List = () => {
    const pressReleases=useSelector((state)=>state?.pressReleaseData?.pressReleases)
    console.log("pressReleases:",pressReleases);

  return (
    <div>
        <h1>pressRelease</h1>
        <PressRelease pressReleases={pressReleases} />
        <br/>
        <Pagination total={pressReleases?.totalPages} current={pressReleases?.currentPage} />

    </div>
  )
}

export default List
