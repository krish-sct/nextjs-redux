'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  setTestimonials } from "../../../redux/slices/testimonialSlice";
import { getTestimonials, getArticles, getTemplates, getCareers, getNews, getNewsLetters, getPodcasts, getPressReleases, getEventTradeShows, getFaqs, getContactus } from '../../../utils/apis'
import { setArticles } from "../../../redux/slices/articleSlice";
import { setTemplates } from "../../../redux/slices/templateSlice";
import {setCareers} from "../../../redux/slices/careerSlice"
import { setNews } from "../../../redux/slices/newsSlice";
import { setNewsLetter } from "../../../redux/slices/newsLetterSlice";
import { setPressReleases } from "../../../redux/slices/pressReleaseSlice";
import { setPodcasts } from "../../../redux/slices/podcastSlice";
import { setEventTradeShows } from "../../../redux/slices/eventTradeShowsSlice";
import { setFaqs } from "../../../redux/slices/faqSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const fetchAll = async () => {
    const testimonials = await getTestimonials();
    const articles=await getArticles();
    const templates=await getTemplates();
    const careers=await getCareers();
    const news = await getNews();
    const newsLetter=await getNewsLetters();
    const podcasts=await getPodcasts();
    const pressReleases=await getPressReleases();
    const eventTradeShows=await getEventTradeShows();
    const faqs=await getFaqs();
    const contactus=await getContactus();

  
    if (testimonials) {
      dispatch(setTestimonials(testimonials))
    }
    if(articles){
      dispatch(setArticles(articles))
    }
    if(templates){
      dispatch(setTemplates(templates))
    }
    if(careers){
      dispatch(setCareers(careers))
    }
    if (news) {
      dispatch(setNews(news))
    }
    if(newsLetter){
      dispatch(setNewsLetter(newsLetter))
    }
    if(pressReleases){
      dispatch(setPressReleases(pressReleases))
    }
    if(podcasts){
      dispatch(setPodcasts(podcasts))
    }
    if(eventTradeShows){
      dispatch(setEventTradeShows(eventTradeShows))
    }
    if(faqs){
      dispatch(setFaqs(faqs))
    }
   
  }
  useEffect(()=>{
    fetchAll()
  },[])
  return (
    <div>
      <nav className="">
        <Link className="link" href="/">
          <h3>Data Systems</h3>
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
