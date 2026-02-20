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

export const skillsModel = {
  professional: [
    { name: 'Programming',               level: 95 },
    { name: 'Communication & Teamwork',  level: 93 },
    { name: 'Multiple Projects',         level: 85 },
    { name: 'Analytical & Problem Solving', level: 90 },
  ],
  additional: [
    'Schedule Maintenance',
    'Web Designing',
    'Patience',
    'Critical Thinking',
  ],
};

export const technicalModel = {
  Programming: ['Python', 'JavaScript', 'C', 'C++', 'C#'],
  Web:         ['HTML', 'CSS', 'Frontend Dev', 'Website Maintenance'],
  'AI / ML':   ['Generative AI', 'Reinforcement Learning', 'State Space Modeling'],
  Other:       ['Graphic Design', 'Video Editing', 'Project Documentation'],
};

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
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

