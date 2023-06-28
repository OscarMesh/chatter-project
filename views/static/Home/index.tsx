"use client";
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const HomePageWrapper = () => {
  return (
    <div>
      <Hero />

      <section id="about">
        <About />
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="blog">
        <Blog />
      </section>
    </div>
  );
};

export default HomePageWrapper;
