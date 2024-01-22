"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
// import { useDispatch } from "react-redux";
// import { fetchTestimonial } from "../../../redux/slices/testimonialSlice";
// import { fetchArticle } from "../../../redux/slices/articleSlice";
// import { fetchCareer } from "../../../redux/slices/careerSlice";
// import { fetchEventTradeShow } from "../../../redux/slices/eventTradeShowsSlice";
// import { fetchFaq } from "../../../redux/slices/faqSlice";
// import { fetchNews } from "../../../redux/slices/newsSlice";
// import { fetchNewsLetter } from "../../../redux/slices/newsLetterSlice";
// import { fetchPodcast } from "../../../redux/slices/podcastSlice";
// import { fetchPressRelease } from "../../../redux/slices/pressReleaseSlice";
// import { fetchMaster } from "../../../redux/slices/masterSlice";
// import { fetchVideoUrl } from "../../../redux/slices/videoSlice";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    id: 3,
    title: "Articles",
    url: "/articles",
  },
  {
    id: 4,
    title: "Careers",
    url: "/careers",
  },
  {
    id: 5,
    title: "News",
    url: "/news",
  },
  {
    id: 6,
    title: "NewsLetter",
    url: "/newLetters",
  },
  {
    id: 7,
    title: " Podcasts",
    url: "/podcast",
  },
  {
    id: 8,
    title: "PressRelease",
    url: "/pressRelease",
  },
  {
    id: 9,
    title: " FAQ",
    url: "/faqs",
  },
  {
    id: 10,
    title: "EventTradeShows",
    url: "/eventTradeShows",
  },
  {
    id: 11,
    title: "Videos",
    url: "/videos",
  },
  {
    id: 12,
    title: "Contact Us",
    url: "/contactus",
  },
];

const Navbar = () => {
  // const dispatch = useDispatch();
  // const fetchAll = async () => {
  //   try {
  //     dispatch(fetchTestimonial());
  //     dispatch(fetchArticle());
  //     dispatch(fetchCareer());
  //     dispatch(fetchEventTradeShow());
  //     dispatch(fetchFaq());
  //     dispatch(fetchNews());
  //     dispatch(fetchNewsLetter());
  //     dispatch(fetchPodcast());
  //     dispatch(fetchPressRelease());
  //     dispatch(fetchVideoUrl());
  //     dispatch(fetchMaster());
  //   } catch (error) {
  //     console.error("Error in fetching:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchAll();
  // }, []);
  return (
    <div className={styles.container}>
      <Link className={styles.text} href="/">
        E-con Systems
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.links}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
