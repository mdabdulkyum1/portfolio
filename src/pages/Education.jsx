import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-12 bg-light-background dark:bg-dark-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Educational Qualification
        </h2>

        {/* Card Container */}
        <div className="relative bg-white dark:bg-dark-background rounded-lg shadow-xl p-6 border border-light-border dark:border-dark-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-light-accent dark:hover:border-dark-accent">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent opacity-5 rounded-lg"></div>

          {/* Icon */}
          <div className="flex items-center gap-4 mb-4">
            <FaGraduationCap className="text-4xl text-light-accent dark:text-dark-accent" />
            <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">
              BSc Degree (Pass Course)
            </h3>
          </div>

          {/* Degree Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
            Currently pursuing a Bachelor of Science degree in Math and Biology.
            Expected graduation in <span className="font-semibold text-primary">2022</span>.
          </p>

          {/* Course Details */}
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Completed coursework in Math, Biology, and English</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
