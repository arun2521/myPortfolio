import React from "react";
import "./Project.css";
import platefulImg from "../assets/plateFulLogo.png";
import QkartLogo from "../assets/QkartLogo.png";

const projects = [
  {
    name: "Plateful 🍽️",
    description:
      "A recipe web app with dynamic UI, modal-based instructions & ingredients, and API integration for real-time food search.",
    stack: ["React", "Redux", "CSS", "API"],
    github: "https://github.com/arun2521/recipes",
    live: "https://plateful-recipes-by-arun.netlify.app/",
    image: platefulImg,
  },
  {
    name: "Qkart 🔧",
    description:
      "E-Commerce website for seamless shopping experience. Optimized frontend performance and managed backend APIs, and hosted in Netlify.",
    stack: ["React", "Redux", "Ant Design", "JavaScript"],
    github: "https://github.com/arun2521/arunlee810-ME_QKART_FRONTEND_V2",
    live: "https://qkart-frontend-arun.netlify.app/",
    image: QkartLogo,
  },
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h2>🚀 Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
