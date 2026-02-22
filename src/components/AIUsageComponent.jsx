import { useMemo } from 'react';
import '../styles/ai-usage.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { DownloadIcon } from './IconsComponent';

const AI_TOOLS = [
  {
    emoji: '🧠',
    name:  'Claude (Anthropic)',
    desc:  'Architecture decisions, in-depth code review, research synthesis and writing',
  },
  {
    emoji: '⚡',
    name:  'GitHub Copilot',
    desc:  'In-editor code completion and boilerplate generation while I focus on logic',
  },
  {
    emoji: '🔍',
    name:  'Perplexity AI',
    desc:  'Research with live cited sources, useful for literature review and fact-checking',
  },
  {
    emoji: '💬',
    name:  'ChatGPT (OpenAI)',
    desc:  'Brainstorming alternative approaches and quick concept explanations',
  },
  {
    emoji: '🎨',
    name:  'Stable Diffusion',
    desc:  'Visual asset generation for design projects and research diagrams',
  },
];

const AI_WORKFLOW = [
  {
    title: 'Debugging at Speed',
    text:  'I paste error traces with full context. AI narrows the root cause in minutes instead of hours of manual stack tracing, letting me focus on the fix.',
  },
  {
    title: 'ML Research Acceleration',
    text:  'I feed papers to Claude for structured summaries, key contributions, methodology, limitations. I cover more literature in less time without losing depth.',
  },
  {
    title: 'Code Architecture Review',
    text:  'Before finalising a design, I describe the constraints and ask AI to challenge my approach. It surfaces edge cases and trade offs I might have missed.',
  },
  {
    title: 'Prompt Engineering for Image Gen',
    text:  'For generative AI projects I craft multi-part prompts with style, lighting, and composition descriptors to get consistent, usable outputs reliably.',
  },
  {
    title: 'Documentation in Half the Time',
    text:  'I write a rough outline with key points, AI expands it into a first draft, and I rewrite it in my own voice. Reports and READMEs go from hours to minutes.',
  },
];

const PHILOSOPHY =
  '"AI does not replace my thinking, it amplifies it. Before I prompt, I form my own approach. I use AI to validate, accelerate, and explore. Not to bypass understanding."';


const AIUsageComponent = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.08);
  const { ref: toolsRef,   isVisible: toolsVisible   } = useScrollReveal(0.15);
  const { ref: workRef,    isVisible: workVisible     } = useScrollReveal(0.15);

  const tools    = useMemo(() => AI_TOOLS,    []);
  const workflow = useMemo(() => AI_WORKFLOW, []);

  return (
    <section id="ai-usage" ref={sectionRef} className="ai-usage">
      <div className="ai-usage-inner">

        {/* ── Heading ── */}
        <span className="ai-eyebrow">04 — AI Workflow</span>
        <h2 className="ai-heading">
          I Use AI to Work
          <span className="ai-heading-dim">Smarter, Not Less.</span>
        </h2>
        <p className="ai-intro">
          As a computer engineering student I integrate AI tools into every
          stage of my process, from debugging and research to design and
          documentation. Here is exactly how, and which tools I rely on.
        </p>

        {/* ── Philosophy quote ── */}
        <div className="ai-philosophy">
          <div className="ai-philosophy-bar" />
          <p className="ai-philosophy-text">{PHILOSOPHY}</p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="ai-grid">

          {/* LEFT — Tools I use + Leo teaser below */}
          <div ref={toolsRef}>
            <p className="ai-col-label">Tools I Use</p>
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`ai-tool-row ${toolsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="ai-tool-icon">{tool.emoji}</div>
                <div className="ai-tool-info">
                  <p className="ai-tool-name">{tool.name}</p>
                  <p className="ai-tool-desc">{tool.desc}</p>
                </div>
              </div>
            ))}

            {/* ── Leo local AI teaser ── */}
            <div className={`leo-teaser ${toolsVisible ? 'visible' : ''}`}
                 style={{ transitionDelay: '450ms' }}>

              {/* Header row */}
              <div className="leo-teaser-header">
                <div className="leo-teaser-badge">LOCAL</div>
                <p className="leo-teaser-version">v 2.0.0</p>
              </div>

              {/* Name */}
              <h3 className="leo-teaser-name">LEO</h3>
              <p className="leo-teaser-tagline">
                Custom-configured local AI operative
              </p>

              {/* Three key facts — enough to intrigue, not enough to explain */}
              <ul className="leo-teaser-facts">
                <li>
                  <span className="leo-fact-label">Function</span>
                  <span className="leo-fact-value">
                    Explains, diagnoses, reviews but never writes code
                  </span>
                </li>
                <li>
                  <span className="leo-fact-label">Auth</span>
                  <span className="leo-fact-value">
                    Name-gate protocol on all personal requests
                  </span>
                </li>
                <li>
                  <span className="leo-fact-label">Validation</span>
                  <span className="leo-fact-value">
                    11-point redundancy check on every response
                  </span>
                </li>
                <li>
                  <span className="leo-fact-label">Tone</span>
                  <span className="leo-fact-value">
                    Formal · No emoji · No filler · ASCII only
                  </span>
                </li>
              </ul>

              {/* Footer — real download button for leo_skill.md */}
              <div className="leo-teaser-footer">
                <a
                  href="/files/leo_skill.md"
                  download="leo_skill.md"
                  className="leo-download-btn"
                >
                  <DownloadIcon />
                  skill.md
                </a>
                <span className="leo-teaser-hint">
                  Full operative specification
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — How I work */}
          <div ref={workRef}>
            <p className="ai-col-label">How It Fits My Workflow</p>
            <div className="ai-workflow-list">
              {workflow.map((item, i) => (
                <div
                  key={item.title}
                  className={`ai-workflow-card ${workVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="ai-workflow-title">{item.title}</p>
                  <p className="ai-workflow-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="ai-download-section">
          <p className="ai-download-label">
            <strong>Want the full breakdown?</strong> Download my AI workflow
            document it is a detailed Markdown file covering every tool, prompting
            principles I follow, and the measurable impact on my process.
          </p>
          <a
            href="/files/aryan_kafle_workflow.md"
            download="aryan_kafle_workflow.md"
            className="ai-download-btn"
          >
            <DownloadIcon />
            workflow.md
          </a>
        </div>

      </div>
    </section>
  );
};

export default AIUsageComponent;

