export const profileModel = {
  name:     'Aryan Kafle',
  initials: 'AK',
  title:    'Computer Engineering (BCT)',
  subtitle: 'Undergraduate - Advance College of Engineering and Management, TU',
  location: 'Bafal, Kathmandu',
  phone:    '9869021060',
  email:    'aryan.078bct014@acem.edu.np',

  about: `I'm a computer engineering undergraduate with hands-on experience in web
development, generative AI, reinforcement learning, and system design. I am in my
fourth year at Advance College of Engineering affiliated with TU. I have a strong
affiliation with mathematics and enjoy applying it to build solutions that are
beneficial for students like me.`,

  education: `Bachelor in Computer Engineering (Ongoing): Advance College of
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
    id:       1,
    slug:     'portfolio-management-system',
    title:    'Portfolio Management System',
    subtitle: 'Full-stack web application for managing investment portfolios',
    tags:     ['HTML', 'CSS', 'JavaScript'],
    image:    '/images/project-web.png',
    github:   'https://github.com/aryankaflegithub/PORTFOLIO-MANAGEMENT-SYSTEM',
    difficulty: 2,
    duration:   '2 weeks',
    role:       'Solo Developer',

    overview: `A web-based portfolio management system that allows users to track, manage, and visualise their investment portfolios. Built entirely from scratch using vanilla HTML, CSS, and JavaScript with no frameworks — which made the state management and UI updates a learning experience in themselves.`,

    challenges: [
      {
        title: 'Dynamic UI Without a Framework',
        description: `Without React or any framework, updating the UI in response to data changes required careful manual DOM manipulation. Every portfolio update, add, or delete needed the display to re-render correctly without a full page reload. I solved this by building a lightweight update function that targeted only the changed nodes rather than re-rendering the whole list.`,
      },
      {
        title: 'Data Persistence Without a Backend',
        description: `The project needed to remember user data between sessions. Without a backend, I used localStorage to persist portfolio state. The main challenge was serialising nested data structures and handling cases where stored data was malformed or from an older version of the schema.`,
      },
      {
        title: 'Responsive Layout Complexity',
        description: `Making the dashboard tables and charts responsive across mobile and desktop was more complex than expected. Fixed-width table columns broke on small screens. I solved this by switching to a card-based layout below a breakpoint, collapsing columns into stacked key-value pairs.`,
      },
    ],

    learnings: [
      'How browsers handle DOM updates and why minimising reflows matters for performance',
      'localStorage schema versioning and safe data parsing with fallbacks',
      'Building a responsive data-heavy UI without a component library',
      'How to structure a vanilla JS project to avoid spaghetti code, module pattern, separation of concerns',
      'Deepened understanding of CSS Grid and Flexbox for complex dashboard layouts',
    ],

    screenshots: [
      { src: '/images/project-web.png', caption: 'Portfolio dashboard overview' },
      { src: '/images/project-web-2.png', caption: 'Main description about aryan' },
      { src: '/images/project-web-3.png', caption: 'Technical skills overview' },
      { src: '/images/project-web-4.png', caption: 'Featured projects overview' },
      { src: '/images/project-web-5.png', caption: 'Contact overview' },
    ],
  },

  {
    id:       2,
    slug:     'pygame-game',
    title:    'Pygame Game',
    subtitle: 'A fully playable 2D game built in Python using Pygame',
    tags:     ['Python', 'Pygame'],
    image:    '/images/project-game.png',
    github:   'https://github.com/aryankaflegithub/game',
    difficulty: 4,
    duration:   '6 weeks',
    role:       'Solo Developer & Designer',

    overview: `A 2D game built in Python using the Pygame library. The project covered the full game development lifecycle — game loop architecture, sprite management, collision detection, physics, scoring, and a simple UI. It was my first time thinking about software in terms of real-time frame-by-frame execution rather than request-response.`,

    challenges: [
      {
        title: 'Game Loop Timing and Frame Rate',
        description: `Getting consistent game speed across different machines was the first real challenge. Without a properly managed delta time, the game ran faster on faster machines. I implemented a clock-based frame limiter using Pygame's Clock object and calculated movement as velocity multiplied by delta time to make physics machine-independent.`,
      },
      {
        title: 'Collision Detection Accuracy',
        description: `Pixel-perfect collision with complex sprites caused false positives on the edges of bounding boxes. I solved this by using Pygame's built-in rect collision for broad-phase detection and then adding a pixel mask check only when the rects overlapped, which kept performance acceptable while eliminating ghost collisions.`,
      },
      {
        title: 'Sprite State Management',
        description: `Managing the player's animation states (idle, jumping, dashing) while keeping the game loop clean required building a simple state machine. Each state owned its own animation frames and transition rules, which kept the main loop from becoming a mess of if-else chains.`,
      },
    ],

    learnings: [
      'Real time game loop architecture and the role of delta time in physics',
      'Sprite sheet parsing, animation state machines, and frame cycling',
      'Broad phase vs narrow phase collision detection trade offs',
      'How to structure a Python project that runs in a tight real time loop',
      'Sound management, event queues, and Pygame\'s event driven input model',
    ],

    video: '/videos/gameplay.mov',
    screenshots: [
      { src: '/images/project-game.png', caption: 'Gameplay screenshot' },
    ],
  },

  {
    id:       3,
    slug:     'text-to-image-ai',
    title:    'Text-to-Image AI Research',
    subtitle: 'Research on generative AI models for text-to-image synthesis',
    tags:     ['Generative AI', 'Research', 'Python'],
    image:    '/images/project-ai.png',
    github:   'https://github.com/aryankaflegithub/minor_project',
    difficulty: 5,
    duration:   '6 months',
    role:       'Researcher & Developer',

    overview: `A research project investigating text-to-image generative models, studying how diffusion models and GANs translate natural language prompts into images. The project involved reading and implementing concepts from research papers, running experiments with Stable Diffusion, evaluating output quality, and writing a formal research report.`,

    challenges: [
      {
        title: 'Understanding Diffusion Model Mathematics',
        description: `The forward and reverse diffusion processes involve probability theory and score-matching that go well beyond standard deep learning. Understanding why adding noise in a specific schedule and then learning to reverse it produces coherent images required working through the DDPM and DDIM papers carefully, re-deriving the key equations by hand to verify my understanding.`,
      },
      {
        title: 'Prompt Engineering for Consistent Outputs',
        description: `Getting consistent, evaluatable outputs required learning how prompt structure, negative prompts, guidance scale, and seed values interact. Small changes to a prompt produced wildly different results. I built a structured prompt template system to isolate variables and run controlled comparisons across model configurations.`,
      },
      {
        title: 'Evaluation Without Ground Truth',
        description: `There is no single correct image for a text prompt, making quantitative evaluation difficult. I used FID score for distribution-level quality, CLIP score for prompt-image semantic alignment, and qualitative human evaluation rubrics to assess outputs across multiple dimensions systematically.`,
      },
    ],

    learnings: [
      'Diffusion model theory: forward process, reverse process, score matching, DDPM and DDIM',
      'How CLIP embeddings connect text and image spaces for cross-modal generation',
      'Structured prompt engineering and its measurable effect on output quality',
      'FID and CLIP score as evaluation metrics and their limitations',
      'How to read, implement, and critically evaluate ML research papers',
      'Academic report writing for an ML research context',
    ],

    screenshots: [
      { src: '/images/project-ai.png', caption: 'Sample generated images from prompt experiments' },
      { src: '/images/project-ai-1.png', caption: 'Homepage of the website for image generation' },
      { src: '/images/project-ai-2.png', caption: 'Global workspace to show your generated images' },

    ],
  },

  {
    id:       4,
    slug:     'satellite-attitude-control',
    title:    'Satellite Attitude Control',
    subtitle: 'Reinforcement learning for satellite orientation using state space modeling',
    tags:     ['ML', 'Reinforcement Learning', 'State Space'],
    image:    '/images/project-rl.png',
    github:   'https://github.com/aryankaflegithub/Satellite_attitude_control',
    difficulty: 5,
    duration:   'Ongoing',
    role:       'Developer & Researcher',

    overview: `An ongoing project applying reinforcement learning to the problem of satellite attitude control — teaching an agent to orient a satellite correctly in a simulated environment. The project combines state space modeling of satellite dynamics with RL policy training, requiring deep knowledge of both control theory and machine learning.`,

    challenges: [
      {
        title: 'Modeling Satellite Dynamics Accurately',
        description: `The satellite attitude dynamics are governed by Euler's rotation equations with quaternion representation to avoid gimbal lock. Discretising the continuous dynamics into a simulation-compatible state space while preserving physical accuracy required careful numerical integration and validation against known analytical solutions.`,
      },
      {
        title: 'Reward Function Design',
        description: `Designing a reward function that guides the agent toward stable orientation without encouraging erratic behaviour was unexpectedly difficult. Sparse rewards (only reward when target reached) led to no learning. Dense rewards based on angular error worked better but required careful shaping to prevent the agent from oscillating around the target rather than settling.`,
      },
      {
        title: 'Training Stability in a Continuous Action Space',
        description: `Satellite control requires continuous torque commands, not discrete actions. Standard DQN does not apply. I implemented TD3 (Twin Delayed DDPG) which handles continuous action spaces better than vanilla DDPG by using twin Q-networks to reduce overestimation and delayed policy updates to stabilise training.`,
      },
    ],

    learnings: [
      'Quaternion-based attitude representation and why it avoids gimbal lock',
      'Euler\'s rotation equations and numerical integration for simulation',
      'State space modeling: controllability, observability, state transition matrices',
      'Reinforcement learning in continuous action spaces. DDPG, TD3 algorithms',
      'Reward shaping and its critical impact on RL convergence and behaviour quality',
      'Kalman filtering for state estimation from noisy sensor observations',
    ],

    screenshots: [
      { src: '/images/project-rl.png', caption: 'Training reward curve and attitude error over episodes' },
    ],
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
