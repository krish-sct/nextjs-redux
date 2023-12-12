'use client'
import React, { useEffect, useState } from 'react'
import { getTestimonials } from '../../utils/apis'
import { setTestimonials } from '../../redux/slices/testimonialSlice'
import { useDispatch } from 'react-redux'

const Pagination = ({ total, current }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(current || 1)
  let totalPages = []
  for (let i = 0; i < total; i++) {
    totalPages.push(i + 1)
  }
  const handlePageChange = (number) => {
    setCurrentPage(number)
  }
  const fetchSelectedPage = async () => {
    const testimonials = await getTestimonials(currentPage);
    if (testimonials) {
      dispatch(setTestimonials(testimonials))
    }
  }
  useEffect(() => {
    fetchSelectedPage()
  }, [currentPage])
  return (
    <div className='flex f-r'>
      {totalPages?.map((e, i) => {
        return <div key={i} className={`pagenumber ${current === e ? 'page-selected' : ""}`} onClick={() => handlePageChange(e)}>{e}</div>
      })}
    </div>
  )
}

export default Pagination