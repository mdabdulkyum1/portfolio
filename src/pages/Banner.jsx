import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Banner.css";
import Swal from "sweetalert2";
import bannerImage from "../assets/Mybanner.png";

const handleDownloadCv = () => {
  Swal.fire({
    title: "Choose an action",
    text: "What would you like to do with the CV?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Download",
    cancelButtonText: "Cancel",
    showDenyButton: true,
    denyButtonText: "View",
    focusConfirm: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        "https://docs.google.com/document/d/16nywkcbciu4U-1KTKAWCSxWDyUU7Ljjv_8DGrniKhaE/export?format=pdf",
        "_blank"
      );
    } else if (result.isDenied) {
      window.open(
        "https://docs.google.com/document/d/16nywkcbciu4U-1KTKAWCSxWDyUU7Ljjv_8DGrniKhaE",
        "_blank"
      );
    }
  });
};

const Banner = () => {
  return (
    <>
      <div className="relative bg-light dark:bg-dark min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-16 py-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="my-3 text-2xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent ">
            Hi, I'm Abdul Kyum
          </h2>
          <h1 className="text-2xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent">
            &lt; MERN Stack Developer &gt;
          </h1>
          <p className="text-center lg:text-left text-gray-600 dark:text-dark-accent mt-3 w-full lg:w-10/12">
            Discover my journey in web development and explore my latest
            projects. I’m excited to share my work with you!
          </p>

          {/* Social Media Links */}
          <div className="flex gap-3 mt-8 space-x-6 relative">
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
              href="https://www.linkedin.com/in/md-abdul-kyum"
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

          {/* Download CV Button */}
          <div className="mt-8">
            <button
              onClick={handleDownloadCv}
              className="btn bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent rounded-md border border-light-border dark:border-dark-border shadow-md text-light-text dark:text-dark-text font-bold px-6 py-3 transition hover:scale-105"
            >
              Download CV <i className="fa-light fa-arrow-down ml-2"></i>
            </button>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-80 lg:w-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
