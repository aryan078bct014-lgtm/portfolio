import '../styles/projects.css';
import { IconGithub } from './IconsComponent';

const ProjectCardComponent = ({ project, index }) => (

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
    aria-label={`View ${project.title} on GitHub`}
  >
    <div className="project-image-box">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="project-image"
      />
      <div className="project-overlay">
        <span className="project-overlay-text">
          <IconGithub />
          View on GitHub
        </span>
      </div>
    </div>

    {/* ── Text content ── */}
    <div className="project-body">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <span className="project-github-btn">
          <IconGithub />
        </span>
      </div>
    </div>
  </a>
);

export default ProjectCardComponent;
