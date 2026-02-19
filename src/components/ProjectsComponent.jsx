import { useMemo } from 'react';
import '../styles/projects.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { projectsModel } from '../models/portfolioModel';
import ProjectCardComponent from './ProjectCardComponent';

const ProjectsComponent = () => {
  const { ref, isVisible } = useScrollReveal();
  const projects = useMemo(() => projectsModel, []);

  return (
    <section id="projects" ref={ref} className="projects">
      <div className="projects-inner">

        <p className="section-eyebrow">03 — Work</p>
        <h2 className="section-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card-wrapper ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <ProjectCardComponent project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsComponent;
