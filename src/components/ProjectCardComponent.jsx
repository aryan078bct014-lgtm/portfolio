import '../styles/projects.css';

const ProjectCardComponent = ({ project, index }) => (
  <div className="project-card">

    {/* ── Screenshot / preview image ── */}
    <div className="project-image-box">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="project-image"
      />
    </div>

    {/* ── Text content ── */}
    <div className="project-body">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>

  </div>
);

export default ProjectCardComponent;
