// src/components/Projects.jsx
import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "OutReachHub (CRM) Platform",
    image: "/assets/project1.png",
    description: `It is a SaaS platform designed for businesses to manage their contacts, create simple message templates, and simulate targeted campaigns`,
    tags: ["Angular", "Nest.js", "MongoDB", "Express"],
    links: {
      live: "",
      github: "https://github.com/diyadhardev/OutReachHub-Fullstack",
    },
  },
  {
    id: 2,
    title: "Expense tracker app",
    image: "/assets/project2.png",
    description:
      "A comprehensive personal finance application using a technology as MEAN stack to help users track and manage their finances",
    tags: ["Express", "Node", "Angular"],
    links: {
      live: "",
      github: "https://github.com/diyadhardev/Expense-tracker-app",
    },
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/assets/project3.png",
    description:
      "A personal portfolio website to showcase my skills and projects, featuring interactive animations and a clean design.",
    tags: ["Angular", "DaisyUI", "Motion.dev", "Matter.js"],
    links: {
      live: "",
      github: "https://github.com/diyadhardev/portfolio-react",
    },
  },
];

const Projects = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold text-center text-base-content mb-16">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="card bg-base-200 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // --- THIS LINE IS CHANGED ---
              // By removing `once: true`, the animation will now repeat.
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-base-content/80">{project.description}</p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="badge badge-primary badge-outline"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-6">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
