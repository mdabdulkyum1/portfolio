import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import Education from "./Education";
import { useEffect } from "react";
// import { useEffect, useRef } from 'react';
// import relax from '../assets/audio/relax.mp3'

const Home = () => {
  // const audioRef = useRef(null);

  // useEffect(()=> {
  //   const handelScroll = () => {
  //     if(audioRef.current){
  //         audioRef.current.play();
  //     }
  //   }

  //   window.addEventListener('scroll', handelScroll);
  //   return ()=> {
  //     window.removeEventListener('scroll', handelScroll);
  //   }
  // },[])

  
  useEffect(()=> {
        window.scrollTo(0,0);
  },[])



  return (
    <>
      <div className="">
        {/* <audio ref={audioRef} src={relax} /> */}
        <Banner />
        <About />
        <Education></Education>
        <Portfolio />
        <ContactForm />
        <Helmet>
          <title>Md Abdul Kyum | Home</title>
        </Helmet>
      </div>
    </>
  );
};

export default Home;
