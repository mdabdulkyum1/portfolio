import React from 'react';

const Education = () => {
  return (
    <section className="py-8 bg-light-background dark:bg-dark-background">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-primary ">
        Educational Qualification
      </h2>
      
      {/* HSC Qualification */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text ">
          HSC (Higher Secondary Certificate)
        </h3>
        <p className="mt-2 text-lg dark:text-dark-text text-light-text">
          Completed my Higher Secondary education in Science from Taltali Govt College, graduating in 2019.
        </p>
        <ul className="mt-4 list-disc pl-5 dark:text-dark-text text-light-text">
          <li>Completed coursework in Physics, Chemistry, Math, and Biology</li>
        </ul>
      </div>
  
      {/* BSc Degree (Pass Course) */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold dark:text-dark-text text-light-text">
          BSc Degree (Pass Course)
        </h3>
        <p className="mt-2 text-lg dark:text-dark-text text-light-text">
          Currently pursuing a Bachelor of Science degree in Math and Biology. Expected graduation in 2022.
        </p>
        <ul className="mt-4 list-disc pl-5 dark:text-dark-text text-light-text">
          <li>Completed coursework in Math, Biology, English</li>
        </ul>
      </div>
    </div>
  </section>
  
  );
};

export default Education;
