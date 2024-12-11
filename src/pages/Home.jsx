import Banner from './../components/Banner';
import About from './../components/About';
import Portfolio from '../components/Portfolio';
import ContactForm from './../components/ContactForm';
import Footer from './../components/Footer';
import { useEffect, useRef } from 'react';
import relax from '../assets/audio/relax.mp3'


const Home = () => {

  const audioRef = useRef(null);

  useEffect(()=> {
    const handelScroll = () => {
      if(audioRef.current){
          audioRef.current.play();
      }
    }

    window.addEventListener('scroll', handelScroll);
    return ()=> {
      window.removeEventListener('scroll', handelScroll);
    }
  },[])

    return(
        <>
          <audio ref={audioRef} src={relax} />
          <Banner />
          <About />
          <Portfolio />
          <ContactForm />
          <Footer />
        </>
    )  
};

export default Home;