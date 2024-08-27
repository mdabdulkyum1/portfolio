import Banner from './../components/Banner';
import About from './../components/About';
import Portfolio from '../components/Portfolio';
import ContactForm from './../components/ContactForm';
import Footer from './../components/Footer';



const Home = () => {
    return(
        <>
          <Banner />
          <About />
          <Portfolio />
          <ContactForm />
          <Footer />
        </>
    )  
};

export default Home;