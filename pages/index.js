import Head from 'next/head';
import React, { Fragment } from 'react';
import SocialBar from '../components/socialBar';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Collaboration from '../components/Collaboration';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jorge Rodriguez | Front-End Developer</title>
      </Head>
      <Landing />
      <Collaboration />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
