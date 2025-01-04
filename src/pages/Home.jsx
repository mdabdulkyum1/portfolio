import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
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

    return(
        <div className=''>
          {/* <audio ref={audioRef} src={relax} /> */}
          <Banner />
          <About />
          <Portfolio />
          <ContactForm />
        </div>
    )  
};

export default Home;