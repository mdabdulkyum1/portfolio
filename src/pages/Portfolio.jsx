import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetching data from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/portfolio.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data.");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  
  useEffect(()=> {
    window.scrollTo(0,0);
},[])


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
    <>
      <Helmet>
        <title>Md Abdul Kyum | Portfolio</title>
      </Helmet>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="dark:border-primary border bg-midnight-blue text-slate-gray shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-gray mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-steel-gray mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Preview
                    </a>
                    <Link to={`/details/${project.id}`}>
                      <button className="btn btn-sm border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
