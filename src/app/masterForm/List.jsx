'use client'
import React from 'react'
import Pagination from '../components/Pagination'
import {useSelector} from 'react-redux'

const List = () => {
    const masterForms=useSelector((state)=>state?.masterFormData?.masterForms)

    return (
    <div>
      <h3>MasterForm</h3>
      <br/>
      <Pagination total={masterForms?.totalPages} current={masterForms?.currentPage} />
    </div>
  )
}

export default List
