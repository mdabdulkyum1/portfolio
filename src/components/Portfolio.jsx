// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Biker Zone",
      category: "E-commerce",
      url: "https://mdabdulkyum1.github.io/biker-zone/",
      description:
        "A vibrant e-commerce platform for motorcycle enthusiasts, featuring sleek UI and smooth navigation.",
    },
    {
      title: "Tea House",
      category: "Landing Page",
      url: "https://mdabdulkyum1.github.io/tea-house/",
      description:
        "A calming landing page for tea lovers, showcasing a minimalist design with a soothing color palette.",
    },
    {
      title: "Gamer Zone",
      category: "E-commerce",
      url: "https://mdabdulkyum1.github.io/Gamer-Zone/",
      description:
        "An exciting e-commerce site tailored for gamers, offering dynamic content and engaging visuals.",
    },
    {
      title: "Influencer Gear",
      category: "E-commerce",
      url: "https://mdabdulkyum1.github.io/influencer-gear/",
      description:
        "A modern e-commerce platform designed for influencers, featuring an intuitive shopping experience.",
    },
    {
      title: "G3 Architects",
      category: "Portfolio",
      url: "https://mdabdulkyum1.github.io/g3-architects/",
      description:
        "A professional portfolio site for architects, highlighting impressive projects with a clean design.",
    },
    {
      title: "Project 3",
      category: "Portfolio",
      url: "https://mdabdulkyum1.github.io/Project-3/",
      description:
        "A showcase portfolio with interactive elements and a focus on user experience and design.",
    },
    {
      title: "Project 1",
      category: "Portfolio",
      url: "https://mdabdulkyum1.github.io/Project-1/",
      description:
        "An elegant portfolio project emphasizing creative visuals and responsive layout.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-deep-navy py-12" id="port">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-slate-gray mb-10 text-center">
            My Portfolio
          </h2>
        {/* Category Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center">
          {["All", "Portfolio", "E-commerce", "Landing Page"].map(
            (category) => (
              <button
                key={category}
                className={`w-full px-4 py-2 rounded-md transition duration-300 ${
                  activeCategory === category
                    ? "bg-slate-gray text-deep-navy font-semibold"
                    : "bg-midnight-blue text-slate-gray hover:bg-slate-gray hover:text-deep-navy"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-midnight-blue text-slate-gray shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-gray mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-steel-gray mb-4">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 text-sm font-semibold text-deep-navy bg-slate-gray rounded-md hover:bg-t-flax hover:text-rich-blue transition-colors duration-300"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
