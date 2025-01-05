import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useLoaderData(); // Fetch data from loader
  const { id } = useParams(); // Extract the ID from the route params
  const project = projects.find((proj) => proj.id === parseInt(id)); // Find project by ID

  if (!project) {
    return <div className="text-center text-primary">Project not found.</div>;
  }
  useEffect(()=> {
        window.scrollTo(0,0);
  },[])

  return (
    <div
      className="min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-4xl mx-auto bg-light-background dark:bg-dark-background shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-primary dark:text-dark-text mb-4">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-light-text dark:text-dark-text mb-6">
            {project.description}
          </p>

          {/* Details Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">
                Category:
              </span>
              <span className="text-light-text dark:text-dark-text">
                {project.category}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">
                Link:
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-dark-accent hover:underline"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
