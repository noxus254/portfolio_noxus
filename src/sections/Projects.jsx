import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import Reveal from "../components/Reveal";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description:
        "A performance-oriented and fully responsive business website built with clean code structure and component-based design principles. The project highlights accessibility, UI consistency, and scalable front-end architecture.",
      tech: ["React", "Styled Components", "Spotify API", "Express"],
      github: "https://github.com",
      external: "https://google.com",
      image: project1Image,
    },
    {
      title: "Project Beta",
      description:
        "A scalable and performance-focused landing page built with responsive design best practices. The interface combines modern UI aesthetics with structured layout architecture to ensure consistency and accessibility across platforms.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      github: "https://github.com",
      external: "https://google.com",
      image: project2Image,
    },
  ];

  return (
    <SectionWrapper id="projects" className="projects-section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-number">04.</span> Some Things I've Built
        </h2>
      </Reveal>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={index} width="100%">
            <div
              className={`project-item ${index % 2 !== 0 ? "reversed" : ""}`}
            >
              <div className="project-image">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
