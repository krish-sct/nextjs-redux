"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

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
    title: "NewsLetters",
    url: "/newsLetters",
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
