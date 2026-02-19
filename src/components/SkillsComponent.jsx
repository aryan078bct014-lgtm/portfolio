import { useMemo } from 'react';
import '../styles/skills.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { skillsModel, technicalModel } from '../models/portfolioModel';

// Single animated skill bar
const SkillRow = ({ name, level, isVisible, delay }) => (
  <div
    className={`skill-row ${isVisible ? 'visible' : ''}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="skill-name-row">
      <span className="skill-name">{name}</span>
      <span className="skill-percent">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width:           isVisible ? `${level}%` : '0%',
          transitionDelay: `${delay + 200}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsComponent = () => {
  const { ref, isVisible }  = useScrollReveal();
  const professional        = useMemo(() => skillsModel.professional, []);
  const additional          = useMemo(() => skillsModel.additional,   []);
  const technical           = useMemo(() => Object.entries(technicalModel), []);

  return (
    <section id="skills" ref={ref} className="skills">
      <div className="skills-inner">

        <p className="section-eyebrow">02 — Skills</p>
        <h2 className="section-heading">Expertise</h2>

        <div className="skills-grid">

          {/* ── Left: professional + additional ── */}
          <div>
            <p className="skills-group-label">Professional Skills</p>

            {professional.map((skill, i) => (
              <SkillRow
                key={skill.name}
                name={skill.name}
                level={skill.level}
                isVisible={isVisible}
                delay={i * 100}
              />
            ))}

            <p className="skills-group-label" style={{ marginTop: '3rem' }}>Additional Skills</p>
            <div className="additional-grid">
              {additional.map((skill) => (
                <div key={skill} className="additional-pill">{skill}</div>
              ))}
            </div>
          </div>

          {/* ── Right: technical ── */}
          <div>
            <p className="skills-group-label">Technical Skills</p>
            {technical.map(([category, skills]) => (
              <div key={category} className="tech-category">
                <p className="tech-category-name">{category}</p>
                <div className="tech-tags">
                  {skills.map((s) => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
