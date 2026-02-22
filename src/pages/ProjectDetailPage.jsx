import { useMemo, useCallback } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { projectsModel } from '../models/portfolioModel';
import '../styles/project-detail.css';
import {IconGithub , BackIcon} from '../components/IconsComponent';


const DifficultyDots = ({ level, max = 5 }) => (
  <div className="pd-difficulty-dots">
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={`pd-dot ${i < level ? 'pd-dot-filled' : ''}`} />
    ))}
  </div>
);

const ProjectDetailPage = () => {
  const { slug }    = useParams();
  const navigate    = useNavigate();

  const goBackToProjects = useCallback((e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [navigate]);

  const project = useMemo(
    () => projectsModel.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="pd-page">
      <div className="pd-inner">

        {/* ── Back button — goes home and scrolls to #projects ── */}
        <a href="/#projects" onClick={goBackToProjects} className="pd-back">
          <BackIcon />
          Back to Projects
        </a>

        <header className="pd-header">
          <div className="pd-header-meta">
            <div className="pd-tags">
              {project.tags.map((t) => (
                <span key={t} className="pd-tag">{t}</span>
              ))}
            </div>
            <div className="pd-meta-row">
              <span className="pd-meta-item">
                <span className="pd-meta-label">Duration</span>
                <span className="pd-meta-value">{project.duration}</span>
              </span>
              <span className="pd-meta-item">
                <span className="pd-meta-label">Role</span>
                <span className="pd-meta-value">{project.role}</span>
              </span>
              <span className="pd-meta-item">
                <span className="pd-meta-label">Difficulty</span>
                <DifficultyDots level={project.difficulty} />
              </span>
            </div>
          </div>

          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-subtitle">{project.subtitle}</p>
        </header>

        {/* ── Hero image ── */}
        <div className="pd-hero-image-box">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="pd-hero-image"
          />
        </div>

        <section className="pd-section">
          <h2 className="pd-section-title">Overview</h2>
          <p className="pd-body-text">{project.overview}</p>
        </section>

        <section className="pd-section">
          <h2 className="pd-section-title">Challenges &amp; How I Solved Them</h2>
          <div className="pd-challenges">
            {project.challenges.map((c, i) => (
              <div key={c.title} className="pd-challenge-card">
                <div className="pd-challenge-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="pd-challenge-content">
                  <h3 className="pd-challenge-title">{c.title}</h3>
                  <p className="pd-body-text">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {project.screenshots?.length > 0 && (
          <section className="pd-section">
            <h2 className="pd-section-title">Screenshots</h2>
            <div className="pd-screenshots">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="pd-screenshot-figure">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="pd-screenshot-img"
                  />
                  <figcaption className="pd-screenshot-caption">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.video && (
            <section className="pd-section">
                <h2 className="pd-section-title">Gameplay Video</h2>
                <video
                src={project.video}
                controls
                className="pd-video"
                poster={project.image}
                />
            </section>
        )}

        <section className="pd-section">
          <h2 className="pd-section-title">What I Learned</h2>
          <ul className="pd-learnings">
            {project.learnings.map((l, i) => (
              <li key={i} className="pd-learning-item">
                <span className="pd-learning-marker" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="pd-github-cta">
          <div>
            <p className="pd-cta-heading">View the Source Code</p>
            <p className="pd-cta-sub">
              Full repository - code, commits, and documentation on GitHub.
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pd-github-btn"
          >
            <IconGithub />
            Open on GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
