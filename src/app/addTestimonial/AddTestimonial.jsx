'use client'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTestimonials, getTestimonials } from "../../utils/apis";
import { setTestimonials } from "../../redux/slices/testimonialSlice";
import { useRouter } from "next/navigation";
const AddTestimonial = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [testimonial, setTestimonial] = useState({
        description: "",
        person: "",
        company: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTestimonial((prev) => { return { ...prev, [name]: value } })
    }
    const handleAdd = async () => {
        const res = await addTestimonials(testimonial)
        if (res?.status === 200) {
            const testimonials = await getTestimonials();
            if (testimonials) {
                dispatch(setTestimonials(testimonials))
            }
            setTestimonial({
                description: "",
                person: "",
                company: ""
            })
            router.push('/testimonials')
        } else {
            console.error({ res });
        }
    }

    return <div>
        <div className="className">
            <h1 className="className">Add Testimonial details</h1>
            <textarea className="input" placeholder="description" name="description" value={testimonial.description} onChange={handleInputChange} cols="30" rows="5"></textarea><br />
            <input type="text" className="input" placeholder="person" name="person" value={testimonial.person} onChange={handleInputChange} /><br />
            <input type="text" className="input" placeholder="company" name="company" value={testimonial.company} onChange={handleInputChange} /><br />
            <button className="input" onClick={handleAdd}>Save</button>
        </div>
    </div>;
};

export default AddTestimonial;
