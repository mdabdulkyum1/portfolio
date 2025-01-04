
import  { useState } from "react";

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
    {
      title: "Real State",
      category: "E-commerce",
      url: "https://my-real-estate-two.vercel.app/",
      description:
        "An elegant portfolio project emphasizing creative visuals and responsive layout.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = {
    All: projects.length,
    Portfolio: projects.filter((project) => project.category === "Portfolio")
      .length,
    "E-commerce": projects.filter(
      (project) => project.category === "E-commerce"
    ).length,
    "Landing Page": projects.filter(
      (project) => project.category === "Landing Page"
    ).length,
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="py-12" id="port">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl lg:text-5xl font-bold text-primary dark:text-dark-text mb-12 text-center">
      My Projects
    </h2>

    {/* Category Buttons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          className={`w-full px-4 py-3 rounded-full shadow-lg transition-all duration-400 relative overflow-hidden ${
            activeCategory === category
              ? "bg-gradient-to-r from-[#005EFF] to-[#42EADD] text-white border-2 border-cyan-400"
              : "bg-gradient-to-r from-[#4876FD] to-[#2Ad7EE] text-white hover:scale-105 hover:shadow-2xl hover:from-[#005EFF] hover:to-[#42EADD]"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          <span className="absolute inset-0 w-[200%] h-[200%] bg-white opacity-10 rotate-45 transition-all duration-400 transform -top-1/2 -left-1/2"></span>
          {`${category} (${categories[category]})`}
        </button>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredProjects.map((project) => (
        <div
          key={project.title}
          className="bg-midnight-blue text-slate-gray shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-gray mb-3">{project.title}</h2>
            <p className="text-sm text-steel-gray mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4876FD] to-[#2Ad7EE] rounded-full shadow-lg transition-all duration-400 relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:from-[#005EFF] hover:to-[#42EADD]"
            >
              <span className="absolute inset-0 w-[200%] h-[200%] bg-white opacity-10 rotate-45 transition-all duration-400 transform -top-1/2 -left-1/2"></span>
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
