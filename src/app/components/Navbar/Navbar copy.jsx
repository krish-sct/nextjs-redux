'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTestimonial } from "../../../redux/slices/testimonialSlice";
import { fetchArticle } from "../../../redux/slices/articleSlice";
import { fetchCareer } from "../../../redux/slices/careerSlice";
import { fetchEventTradeShow } from "../../../redux/slices/eventTradeShowsSlice";
import { fetchFaq } from "../../../redux/slices/faqSlice";
import { fetchNews } from "../../../redux/slices/newsSlice";
import { fetchNewsLetter } from "../../../redux/slices/newsLetterSlice";
import { fetchPodcast } from "../../../redux/slices/podcastSlice";
import { fetchPressRelease } from "../../../redux/slices/pressReleaseSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const fetchAll = async () => {
    try {
      await dispatch(fetchTestimonial());
      await dispatch(fetchArticle());
      await dispatch(fetchCareer());
      await dispatch(fetchEventTradeShow())
      await dispatch(fetchFaq())
      await dispatch(fetchNews())
      await dispatch(fetchNewsLetter())
      await dispatch(fetchPodcast())
      await dispatch(fetchPressRelease())
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
  useEffect(()=>{
    fetchAll()
  },[dispatch])
  return (
    <div>
      <nav className="">
        <Link className="link" href="/">
          <h3>E-con Systems</h3>
        </Link>
        <ul>
          <Link className="link" href="/">Home</Link><br />
          <Link className="link" href="/testimonials">Testimonials</Link><br />
          <Link className="link" href="/articles">Articles</Link><br/>
          <Link className="link" href="/templates">Templates</Link><br/>
          <Link className="link" href="/careers">Careers</Link><br/>
          <Link className="link" href="/news">News</Link><br/>
          <Link className="link" href="/newsLetter">NewsLetter</Link><br/>
          <Link className="link" href="/podcast">Podcasts</Link><br/>
          <Link className="link" href="/pressRelease">PressRelease</Link><br/>
          <Link className="link" href="/eventTradeShows">EventTradeShows</Link><br/>
          <Link className="link" href="/faqs">FAQ</Link><br/>
          <Link className="link" href="/contactus">Contact Us</Link><br/>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
