'use client'
import React from 'react'
import { deleteTestimonial, getTestimonials } from '../../utils/apis'
import { useDispatch } from 'react-redux'
import { setTestimonials } from '../../redux/slices/testimonialSlice'

const Delete = ({ id }) => {
    const dispatch = useDispatch()
    const handleDelete = async () => {
        const res = await deleteTestimonial(id)
        if (res?.status === 200) {
            const testimonials = await getTestimonials();
            if (testimonials) {
                dispatch(setTestimonials(testimonials))
            }
        }
    }
    return (
        <div className='btn-delete' onClick={handleDelete}>Delete</div>
    )
}

export default Delete