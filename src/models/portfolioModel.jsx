export const profileModel = {
  name:     'Aryan Kafle',
  initials: 'AK',
  title:    'Computer Engineering (BCT)',
  subtitle: 'Undergraduate — Advance College of Engineering & Management, TU',
  location: 'Bafal, Kathmandu',
  phone:    '9869021060',
  email:    'aryan.078bct014@acem.edu.np',

  about: `I'm a computer engineering undergraduate with hands-on experience in web
development, generative AI, reinforcement learning, and system design. I am in my
fourth year at Advance College of Engineering affiliated with TU. I have a strong
affiliation with mathematics and enjoy applying it to build solutions that are
beneficial for students like me.`,

  education: `Bachelor in Computer Engineering (Ongoing) — Advance College of
Engineering & Management, Tribhuvan University. I come from a science background
with a strong foundation in mathematics and applied computing.`,

  // Hero section: the RN | AK monogram logo
  logoImage: '/images/logo.png',

  // About section: portrait photo
  profileImage: '/images/profile.jpg',

  cv:     '/files/aryan_kafle_cv.pdf',
  resume: '/files/aryan_kafle_resume.pdf',
};

export const technicalSkillsModel = [
  {
    category: 'Programming',
    skills: [
      {
        name: 'Python',
        summary: 'Primary language for AI, ML, automation and game dev',
        detail: `Python is my most-used language. I have built a Pygame game, trained generative AI models, implemented reinforcement learning algorithms, and written data processing scripts. I am comfortable with object-oriented patterns, file I/O, and working with numerical data.`,
        packages: ['NumPy', 'Pandas', 'Matplotlib', 'Pygame', 'TensorFlow', 'Scikit-learn', 'Jupyter'],
      },
      {
        name: 'JavaScript',
        summary: 'Frontend scripting and interactive web development',
        detail: `I use JavaScript to build interactive websites and single-page applications. I am familiar with DOM manipulation, event handling, fetch API, and modern ES6+ syntax. I have used it alongside HTML and CSS on multiple portfolio and client projects.`,
        packages: ['React', 'Vite', 'Tailwind CSS', 'Node.js (basic)', 'Fetch API'],
      },
      {
        name: 'C',
        summary: 'Systems programming and low-level fundamentals',
        detail: `Studied C as part of my engineering curriculum. Used it for data structures, algorithms, memory management, and understanding how low-level computation works. Foundation for understanding C++ and system design.`,
        packages: ['GCC', 'GDB', 'Make'],
      },
      {
        name: 'C++',
        summary: 'Object-oriented programming and algorithm design',
        detail: `Used C++ for algorithm coursework and competitive-style problem solving. Comfortable with classes, inheritance, pointers, STL containers, and templates. Applied in data structure assignments and engineering lab work.`,
        packages: ['STL', 'GCC / G++', 'Visual Studio'],
      },
      {
        name: 'C#',
        summary: 'Application development and .NET ecosystem basics',
        detail: `Learned C# for application development coursework. Built basic Windows desktop applications and explored Unity for game prototyping. Familiar with .NET classes, LINQ, and event-driven programming patterns.`,
        packages: ['.NET Framework', 'Visual Studio', 'Unity (basic)'],
      },
    ],
  },
  {
    category: 'Web',
    skills: [
      {
        name: 'HTML',
        summary: 'Semantic markup and document structure',
        detail: `I write clean semantic HTML for all my web projects. Comfortable with forms, accessibility attributes, meta tags, linking stylesheets and scripts, and structuring layouts with modern HTML5 elements.`,
        packages: ['HTML5', 'Emmet', 'VS Code'],
      },
      {
        name: 'CSS',
        summary: 'Styling, layout, animations and responsive design',
        detail: `CSS is where I spend a lot of time. I use Flexbox, CSS Grid, custom properties (variables), media queries, and transitions to build fully responsive layouts. I also use Tailwind CSS for utility-first styling on React projects.`,
        packages: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'CSS Variables', 'Animations'],
      },
      {
        name: 'Frontend Dev',
        summary: 'Building complete interactive UIs with React',
        detail: `I build modern frontend applications using React with hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback). I structure projects with clear component hierarchies, custom hooks, and context-based state management.`,
        packages: ['React 18', 'Vite', 'React Router', 'Context API', 'Custom Hooks'],
      },
      {
        name: 'Website Maintenance',
        summary: 'Updating, debugging and improving live sites',
        detail: `I have maintained multiple websites — fixing layout bugs, updating content, improving performance, and ensuring cross-browser compatibility. Comfortable with browser DevTools, debugging CSS issues, and deploying updates.`,
        packages: ['Chrome DevTools', 'GitHub Pages', 'Netlify', 'Vercel'],
      },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      {
        name: 'Generative AI',
        summary: 'Research into text-to-image synthesis models',
        detail: `Conducted a research project on text-to-image generative models as my minor project. Studied diffusion models, GANs, and prompt engineering. Evaluated model outputs and compared architectures for image quality and semantic accuracy.`,
        packages: ['Stable Diffusion', 'Hugging Face', 'CLIP', 'PyTorch', 'Gradio'],
      },
      {
        name: 'Reinforcement Learning',
        summary: 'RL algorithms for satellite attitude control',
        detail: `Currently applying reinforcement learning to a satellite attitude control problem. Implementing policy gradient and Q-learning methods to train an agent to control satellite orientation in a simulated environment.`,
        packages: ['Gymnasium (OpenAI)', 'Stable-Baselines3', 'NumPy', 'Matplotlib', 'PyTorch'],
      },
      {
        name: 'State Space Modeling',
        summary: 'Mathematical modeling of dynamic systems',
        detail: `Using state space representations to model the dynamics of a satellite system. Familiar with state transition matrices, observability, controllability, and Kalman filtering as part of the satellite attitude control project.`,
        packages: ['SciPy', 'NumPy', 'MATLAB (basic)', 'Control Systems Toolbox'],
      },
    ],
  },
  {
    category: 'Other',
    skills: [
      {
        name: 'Graphic Design',
        summary: 'Visual design, branding and digital assets',
        detail: `I have worked as a graphic designer creating logos, social media assets, posters, and branding materials. I designed my own monogram logo (the AK mark used on this portfolio) and have done design work for external clients.`,
        packages: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Figma (basic)'],
      },
      {
        name: 'Video Editing',
        summary: 'Editing and post-production for digital content',
        detail: `Experienced in video editing for social media, presentations, and short-form content. Comfortable with cut editing, colour grading, motion titles, and audio mixing. Have edited content for personal and client projects.`,
        packages: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects (basic)', 'CapCut'],
      },
      {
        name: 'Project Documentation',
        summary: 'Writing clear technical reports and documentation',
        detail: `I write technical documentation for all my projects including reports, README files, and research papers. Comfortable structuring methodology, results, and references in both academic and professional formats.`,
        packages: ['LaTeX', 'Markdown', 'MS Word', 'Google Docs', 'Notion'],
      },
    ],
  },
];

export const projectsModel = [
  {
    id:          1,
    title:       'Portfolio Websites',
    description: 'Built and maintained multiple personal and client websites from scratch using modern web technologies.',
    tags:        ['HTML', 'CSS', 'JavaScript'],
    image:       '/images/project-web.png',
    github:      'https://github.com/aryankaflegithub/PORTFOLIO-MANAGEMENT-SYSTEM',
  },
  {
    id:          2,
    title:       'Pygame Game',
    description: 'Developed a fully playable game using Python and the Pygame library, covering game loops, physics, and UI.',
    tags:        ['Python', 'Pygame'],
    image:       '/images/project-game.png',
    github:      'https://github.com/aryankaflegithub/game',
  },
  {
    id:          3,
    title:       'Text-to-Image AI Research',
    description: 'Conducted research on generative AI models focused on text-to-image synthesis and model evaluation.',
    tags:        ['Generative AI', 'Research', 'Python'],
    image:       '/images/project-ai.png',
    github:      'https://github.com/aryankaflegithub/minor_project',
  },
  {
    id:          4,
    title:       'Reinforcement Learning & State Space Modeling',
    description: 'Currently developing ML algorithms for reinforcement learning with satellite-related state space modeling applications.',
    tags:        ['ML', 'RL', 'State Space'],
    image:       '/images/project-rl.png',
    github:      'https://github.com/aryankaflegithub/Satellite_attitude_control',
  },
];

export const navLinksModel = [
  { label: 'Home',        href: '#home'      },
  { label: 'About',       href: '#about'     },
  { label: 'Skills',      href: '#skills'    },
  { label: 'Projects',    href: '#projects'  },
  { label: 'AI Workflow', href: '#ai-usage'  },
  { label: 'Contact',     href: '#contact'   },
];
