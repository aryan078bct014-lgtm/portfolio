import '../styles/projects.css';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './IconsComponent';

const ProjectCardComponent = ({ project, index }) => (
  <Link
    to={`/project/${project.slug}`}
    className="project-card"
    aria-label={`View ${project.title} details`}
  >
    <div className="project-image-box">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="project-image"
      />
      <div className="project-overlay">
        <span className="project-overlay-text">
          <ArrowIcon />
          View Project
        </span>
      </div>
    </div>

    {/* ── Text content ── */}
    <div className="project-body">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <p className="project-description">{project.subtitle}</p>

      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <span className="project-github-btn">
          View Details <ArrowIcon />
        </span>
      </div>
    </div>
  </Link>
);

export default ProjectCardComponent;
