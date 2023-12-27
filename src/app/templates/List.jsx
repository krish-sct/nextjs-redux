'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import Template from './Template'

const List = () => {
    const templates=useSelector((state)=>state?.templateData?.templates)
    console.log("Templates:",templates);

  return (
    <div>
        <h1>templates</h1>
        <Template templates={templates} />
        <br/>
        <Pagination total={templates?.totalPages} current={templates?.currentPage} />

    </div>
  )
}

export default List
