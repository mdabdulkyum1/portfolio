import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Md Abdul Kyum | About</title>
      </Helmet>
      <div className="bg-light-background dark:bg-dark-background mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Profile Summary */}
           <section className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary dark:text-dark-text mb-8 text-center">
              About Me
            </h2>
            <p className="text-lg text-steel-gray">
              Hi, I'm Md Abdul Kyum ---{" "}
              <strong className="text-slate-gray">
                Jr. Frontend Developer.
              </strong>{" "}
              I am passionate about web development and enjoy creating
              interactive and user-friendly experiences. With a BSc Degree (Pass
              Course) in Science and hands-on experience in web development, I
              am skilled in HTML, CSS, JavaScript, React, WordPress, MongoDB,
              and more. I am dedicated to continuous learning and exploring new
              technologies to enhance my development skills. Outside of coding,
              I enjoy playing football and traveling. Connect with me to discuss
              web projects, tech trends, or anything web-related!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
