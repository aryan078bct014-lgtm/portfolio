import { useState, useMemo, useCallback } from 'react';
import '../styles/skills.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { technicalSkillsModel } from '../models/portfolioModel';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const SkillsComponent = () => {
  const { ref, isVisible }  = useScrollReveal();
  const categories          = useMemo(() => technicalSkillsModel, []);

  const [activeSkill, setActiveSkill] = useState(null);

  const handleTagClick = useCallback((categoryIndex, skillName) => {
    setActiveSkill((prev) => {
      if (prev?.categoryIndex === categoryIndex && prev?.skillName === skillName) {
        return null;
      }
      return { categoryIndex, skillName };
    });
  }, []);

  const closePanel = useCallback(() => setActiveSkill(null), []);

  const activeSkillData = useMemo(() => {
    if (!activeSkill) return null;
    const cat = categories[activeSkill.categoryIndex];
    return cat?.skills.find((s) => s.name === activeSkill.skillName) ?? null;
  }, [activeSkill, categories]);

  return (
    <section id="skills" ref={ref} className="skills">
      <div className="skills-inner">

        <p className="section-eyebrow">02 — Skills</p>
        <h2 className="section-heading">Technical Skills</h2>

        <div className={`skills-categories ${isVisible ? 'visible' : ''}`}>
          {categories.map((category, catIdx) => (
            <div key={category.category} className="skill-category-block">

              <p className="skill-category-label">{category.category}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => {
                  const isActive =
                    activeSkill?.categoryIndex === catIdx &&
                    activeSkill?.skillName === skill.name;

                  return (
                    <button
                      key={skill.name}
                      className={`skill-tag ${isActive ? 'skill-tag-active' : ''}`}
                      onClick={() => handleTagClick(catIdx, skill.name)}
                      aria-expanded={isActive}
                      aria-controls={`panel-${skill.name}`}
                    >
                      {skill.name}
                      {isActive && <span className="skill-tag-dot" />}
                    </button>
                  );
                })}
              </div>

              {activeSkill?.categoryIndex === catIdx && activeSkillData && (
                <div
                  id={`panel-${activeSkillData.name}`}
                  className="skill-panel"
                  role="region"
                  aria-label={`${activeSkillData.name} details`}
                >
                  <div className="skill-panel-header">
                    <div>
                      <h3 className="skill-panel-name">{activeSkillData.name}</h3>
                      <p className="skill-panel-summary">{activeSkillData.summary}</p>
                    </div>
                    <button
                      className="skill-panel-close"
                      onClick={closePanel}
                      aria-label="Close panel"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  <p className="skill-panel-detail">{activeSkillData.detail}</p>

                  <div className="skill-panel-packages-section">
                    <p className="skill-panel-packages-label">Tools &amp; Packages</p>
                    <div className="skill-panel-packages">
                      {activeSkillData.packages.map((pkg) => (
                        <span key={pkg} className="skill-package-chip">{pkg}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
