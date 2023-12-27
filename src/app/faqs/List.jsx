'use client'
import React from 'react'
import Faq from './Faq';
import Pagination from '../components/Pagination';
import {useSelector} from 'react-redux'

const List = () => {
    const faqs=useSelector((state)=>state?.faqData?.faqs)
    console.log("Faqs:",faqs);

  return (
    <div>
      <h1>FAQs</h1>
      <Faq faqs={faqs} />
      <br/>
      <Pagination total={faqs.totalPages} current={faqs?.currentPage} />
    </div>
  )
}

export default List
