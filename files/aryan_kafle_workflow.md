# AI Proficiency & Workflow — Aryan Kafle

> This document outlines how I integrate AI tools into my daily workflow as a
> computer engineering student. AI does not replace my thinking — it amplifies it.

---

## Philosophy

I treat AI as a senior collaborator, not a replacement for understanding.
Before prompting, I form my own approach. I use AI to validate, accelerate,
and explore — not to bypass learning. Every output I use, I understand.

---

## Tools I Use Regularly

| Tool | Primary Use |
|------|-------------|
| **Claude (Anthropic)** | Architecture decisions, code review, writing, research synthesis |
| **ChatGPT (OpenAI)** | Brainstorming, quick lookups, alternative approaches |
| **GitHub Copilot** | In-editor code completion and boilerplate generation |
| **Perplexity AI** | Research with cited sources, literature review |
| **Stable Diffusion / DALL·E** | Visual asset generation for design projects |
| **Grammarly** | Writing clarity and tone refinement |

---

## How I Use AI in Each Domain

### 🖥️ Programming & Development

- **Debugging**: I paste error traces and explain what I expected vs what happened.
  AI narrows down the root cause faster than manual stack tracing.
- **Code review**: Before submitting work, I ask AI to review for edge cases,
  performance issues, and readability — like a second pair of eyes.
- **Architecture**: I describe the problem and constraints, then evaluate
  AI-suggested patterns against what I know. I never copy blindly.
- **Boilerplate**: I use Copilot to generate repetitive scaffolding (imports,
  config files, component shells) so I can focus on logic.

### 🤖 AI / ML Research

- **Paper summarisation**: I feed research papers to Claude and ask for
  structured summaries — key contributions, methodology, limitations.
- **Concept clarification**: When a mathematical concept (e.g. Bellman equation,
  Kalman gain) is unclear, I ask for multiple explanations at different levels.
- **Experiment design**: I describe my hypothesis and data, and use AI to
  suggest evaluation metrics and potential failure modes before I run anything.
- **Code for ML pipelines**: I use AI to scaffold training loops, data loaders,
  and evaluation scripts, then customise and understand each part.

### 🎨 Design & Creative Work

- **Prompt engineering for image generation**: I craft detailed prompts for
  Stable Diffusion / DALL·E with style, lighting, and composition descriptors
  to get consistent, usable outputs.
- **Design feedback**: I describe a layout or upload a screenshot and ask for
  critique — contrast, hierarchy, spacing — before sharing with clients.
- **Copy and microcopy**: For UI text, button labels, and descriptions, I use
  AI to generate options and pick the most fitting one.

### 📝 Writing & Documentation

- **First drafts**: I write a rough outline with key points, then use AI to
  expand it into a first draft — which I then rewrite in my own voice.
- **Technical reports**: For academic submissions, AI helps me structure
  methodology sections and check that my argument flows logically.
- **README files**: I describe the project and AI produces a structured README.
  I then edit for accuracy and tone.

---

## Prompting Principles I Follow

1. **Provide context first** — role, constraints, what I already tried
2. **Be specific about the output format** — bullet list, code block, table, etc.
3. **Iterate** — the first response is a starting point, not a final answer
4. **Ask for reasoning** — "explain why" teaches me, not just what to do
5. **Challenge the output** — I ask "what are the weaknesses of this approach?"
6. **Set scope** — I break large problems into focused sub-prompts

---

## What I Do NOT Use AI For

- **Understanding fundamentals** — I work through core concepts myself first
- **Final decision making** — AI informs, I decide
- **Submitting AI output as my own work** — everything I submit I understand
  and can explain line by line
- **Replacing reading** — I read papers and documentation; AI supplements

---

## Measurable Impact on My Workflow

- **~40% faster debugging** — AI narrows root causes in minutes vs hours of searching
- **~60% less time on boilerplate** — scaffolding is generated, logic is mine
- **Higher quality documentation** — structured, consistent, and complete
- **Better research synthesis** — I cover more papers in less time with AI summaries

---

## Current Learning Focus

- Advanced prompt engineering techniques (chain-of-thought, few-shot)
- Using AI APIs (Anthropic, OpenAI) programmatically in projects
- Retrieval-Augmented Generation (RAG) for knowledge-base applications
- AI-assisted code generation within larger software systems

---

*Aryan Kafle — Computer Engineering Undergraduate*
*Advance College of Engineering & Management, TU*
*aryan.078bct014@acem.edu.np*

---

# LEO — Local AI Operative

> Full specification included below. Leo is a custom-configured local AI system
> I built and use as a personal productivity and knowledge assistant.

---

## What is Leo?

Leo is a task-execution AI system I configured from scratch with a strict
operational definition. Unlike general-purpose assistants, Leo follows a
rigid protocol — it does not write code, it enforces a name-gate authentication
system, and it validates every response through a multi-stage redundancy protocol
before delivering output.

Leo is my experiment in disciplined AI configuration: defining exactly what an
AI should and should not do, and holding it to that standard consistently.

---

## Why I Built Leo

Most AI assistants are designed to be maximally helpful — they write code,
make assumptions, guess intent, and fill gaps. Leo is the opposite. I built
Leo to practice the skill of precise specification: if I cannot define what
I want clearly enough for Leo to execute it, the fault is in my specification,
not the tool.

This teaches me:
- How to write unambiguous task descriptions
- How to think about edge cases before they occur
- How to separate explanation from implementation
- How to design systems with explicit behavioral boundaries

---

## Leo's Core Constraints (Summary)

- **No code generation** — Leo never writes, generates, or outputs source code
- **Name-gate authentication** — Personal requests require addressing Leo by name
- **Redundancy protocol** — 11 standard checks + specialist checks per response type
- **Symbol restriction** — ASCII only, no emoji, no decorative characters
- **Formal tone** — Professional, technical, no filler phrases, no humor
- **Explicit uncertainty** — Leo states confidence level when uncertain

---

## Leo's Skill Set

Leo operates across 4 code-adjacent skills:

| Skill | Description |
|-------|-------------|
| SKILL-EXPLAIN | Reads provided code and describes what it does in natural language |
| SKILL-GUIDE | Provides step-by-step implementation instructions without writing code |
| SKILL-DIAGNOSE | Diagnoses errors from stack traces, logs, or bug descriptions |
| SKILL-REVIEW | Reviews code across 8 quality dimensions and produces a structured report |
| SKILL-ARCHITECT | Describes system architecture and design patterns in prose |

---

## Full Leo Operative Manual

The complete Leo SKILL.MD operative definition follows below.
This is the exact document used to configure Leo's behavior.

---

# SKILL.MD -- LEO ARTIFICIAL INTELLIGENCE OPERATIVE MANUAL

## DOCUMENT METADATA

| Field              | Value                                      |
|--------------------|--------------------------------------------|
| Document Title     | LEO -- Operative Skill Definition File     |
| Version            | 2.0.0                                      |
| Classification     | INTERNAL -- AI SYSTEM CONFIGURATION        |
| Schema             | skill-definition/v2                        |
| Last Revised       | 2025-06-28                                 |

## SECTION 1 -- IDENTITY DEFINITION

Leo is a NON-CODING assistant. Leo explains, diagnoses, reviews, and guides.
Leo never writes code. Leo enforces a name-gate on personal requests.
Leo performs 11-point redundancy validation on every response.

Tone: Formal, professional, technical.
Emoji: Strictly forbidden.
Code generation: Strictly forbidden.

For the complete 11-section operative specification including all pipeline
stages, redundancy checks, skill definitions, domain competencies, and
behavioral directives — see the full document as received separately,
or contact aryan.078bct014@acem.edu.np.

---

*Aryan Kafle — Computer Engineering Undergraduate*
*Advance College of Engineering & Management, TU*
*aryan.078bct014@acem.edu.np*

