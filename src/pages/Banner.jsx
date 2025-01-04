
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Banner.css'


const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center py-6">
          <div className="py-5">
            {/* Other content */}
            <h1 className="text-xl lg:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent">
              &lt; Jr. Frontend Developer &gt;
            </h1>
            <h2 className="text-light-text dark:text-dark-text text-xl font-bold text-center mt-4">
              Welcome to My Portfolio!
            </h2>
            <p className="text-center dark:text-dark-accent w-9/12 my-3 mx-auto">
              Discover my journey in web development and explore my latest projects. I’m excited to share my work with you!
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-3 mt-8 space-x-6 relative">
              {/* Github */}
              <a
                href="https://github.com/mdabdulkyum1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text text-3xl relative"
              >
                <div className="bubbles"></div>
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-abdul-kyum-6ba2ba328/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text text-3xl relative"
              >
                <div className="bubbles"></div>
                <FaLinkedin />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/kyummdabdul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text text-3xl relative"
              >
                <div className="bubbles"></div>
                <FaTwitter />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/mdabdulkyum5325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text text-3xl relative"
              >
                <div className="bubbles"></div>
                <FaFacebook />
              </a>
            </div>


            <div className="text-center mt-10">
               <a
                href="https://docs.google.com/document/d/16nywkcbciu4U-1KTKAWCSxWDyUU7Ljjv_8DGrniKhaE/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent rounded-md border border-light-border dark:border-dark-border shadow-sm text-light-text dark:text-dark-text font-bold mt-4 px-6 py-3"
              >
                Download CV <i className="fa-light fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
