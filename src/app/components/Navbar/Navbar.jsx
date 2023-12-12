'use client'
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../redux/slices/userSlice";
import { setTestimonials } from "../../../redux/slices/testimonialSlice";
import { getTestimonials, getUsers } from '../../../utils/apis'
const Navbar = () => {
  const dispatch = useDispatch()
  const fetchAll = async () => {
    const testimonials = await getTestimonials();
    const users = await getUsers();
    //console.log("users::", users);
    if (users) {
      dispatch(setUsers(users))
    }
    if (testimonials) {
      dispatch(setTestimonials(testimonials))
    }
  }
  fetchAll()
  return (
    <div>
      <nav className="">
        <Link className="link" href="/">
          <h3>Data Systems</h3>
        </Link>
        <ul>
          <Link className="link" href="/">Home</Link><br />
          <Link className="link" href="/users">Users</Link><br />
          <Link className="link" href="/addUser">Add User</Link><br />
          <Link className="link" href="/testimonials">Testimonials</Link><br />
          <Link className="link" href="/addTestimonial">Add Testimonial</Link><br />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
