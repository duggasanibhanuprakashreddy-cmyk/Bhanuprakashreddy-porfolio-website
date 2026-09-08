import { Project, SkillCategory, TimelineItem, Certification, LearningStage } from '../types';

export const PORTFOLIO_INFO = {
  name: 'Bhanuprakash Reddy',
  fullName: 'Duggasani Bhanuprakash Reddy',
  role: 'AI & DS Engineer',
  degreeBadge: 'B.Tech AI & Data Science Student',
  university: 'REVA University',
  location: 'Bengaluru, Karnataka, India',
  email: 'duggasanibhanuprakashreddy@gmail.com',
  githubUrl: 'https://github.com/duggasanibhanuprakashreddy-cmyk',
  linkedinUrl: 'https://www.linkedin.com/in/duggasanibhanuprakashreddy',
  
  // Images from the provided HTML
  monogramUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WLwaYPZ6ohw84b0daqdkB40KblWYC3n6SOkjRSntkYlZ7d56vw9aIbJhppKcJpXd6xkT8rVRVSz_XZqdpqKLgrSF6MOlmXudNZ9TY128oE9JmdYgFZfvmGiFS3DVrUBzL2PHXDyr4Ypa-Zx-U011Y0w9LiJCjXcPfovGDpcf8yR0Pme-Ez-_GTUBXYyxbmNh6t45ow5qsov21PVrpZsTJPhxSeP5_-S7jqQKROAWMAYP2tnY80xOKTZI_E',
  portraitUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XaHzJJgO1i7uqgKUhpHKpOdIQxCWxrS6creUirtSYA5FvXj7Evj8w5SHDhLMb4tXtZOajY5357b8GMT8ELCDoGewwHR_lKPi8hga_QXFscKtRNq_3K_bF4UIDWDmo3k0G2OjJ_oT3V7lCmm3IjQi0g-Tu-DYHdtgv7U5XkTsCKzK3emKbOAyPzxwXI9Wf1bIoFAdZM4BKgAixcofVEUwBzzCFfJIuXt6TMW39YilNqKemslr0cNY3VSQ4S',

  bioP1: "I'm a B.Tech student specializing in Artificial Intelligence & Data Science at REVA University, Bengaluru. I'm passionate about extracting meaningful insights from data and building intelligent solutions to real-world problems.",
  bioP2: "My current focus includes Python programming, data analysis, machine learning fundamentals, data visualization, SQL and IoT & embedded systems. Currently learning Advanced Machine Learning and practical AI applications.",
  statementQuote: "Open to internships, freelance projects and connecting with professionals in AI/ML.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Core',
    description: 'Language fluency and foundational logic structure for scalable compute.',
    iconName: 'Terminal',
    accentColor: 'cyan',
    items: [
      { name: 'Python', tag: 'Core Language' },
      { name: 'SQL', tag: 'Relational DB' },
      { name: 'DSA', tag: 'Algorithms' },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science',
    description: 'Extracting empirical patterns, data wrangling, and descriptive modeling.',
    iconName: 'LineChart',
    accentColor: 'purple',
    items: [
      { name: 'Pandas', tag: 'Data Wrangling' },
      { name: 'NumPy', tag: 'Array Computing' },
      { name: 'Data Analysis', tag: 'Statistical Metrics' },
      { name: 'Exploratory Data Analysis', tag: 'EDA' },
    ],
  },
  {
    id: 'visualization',
    title: 'Data Visualization',
    description: 'Transforming numerical arrays into intuitive graphic representations.',
    iconName: 'BarChart3',
    accentColor: 'blue',
    items: [
      { name: 'Matplotlib', tag: 'Static Plotting' },
      { name: 'Seaborn', tag: 'Statistical Themes' },
      { name: 'Interactive Dashboards', tag: 'Visual Storytelling' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Predictive modeling, regression curves, and optimization loss functions.',
    iconName: 'Brain',
    accentColor: 'cyan',
    items: [
      { name: 'Scikit-learn', tag: 'ML Library' },
      { name: 'Regression', tag: 'Continuous Pred' },
      { name: 'Classification', tag: 'Discrete Output' },
      { name: 'ML Fundamentals', tag: 'Architectures' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    description: 'Microcontroller interfacing, sensor telemetry, wireless transceiver communication.',
    iconName: 'Radio',
    accentColor: 'cyan',
    items: [
      { name: 'IoT Concepts', tag: 'Edge Data' },
      { name: 'Embedded Systems', tag: 'Arduino / Logic' },
      { name: 'Bluetooth Protocols', tag: 'HC-05 / Serial' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-helmet',
    title: 'Smart Helmet System',
    badge: 'IoT Prototype',
    badgeType: 'cyan',
    iconName: 'HardHat',
    description: 'An IoT-based smart helmet concept focused on improving rider safety through helmet-use detection and vehicle-start control.',
    problem: 'Two-wheeler road fatalities frequently stem from riders failing or forgetting to wear helmets before vehicular operation.',
    solution: 'An intelligent helmet system employing sensor detection to verify helmet placement on the rider\'s head before transmitting a wireless permissive ignition signal to the motorcycle engine starter.',
    technologies: ['IoT Architectures', 'Embedded Microcontroller', 'RF/Bluetooth Triggers', 'Limit / Pressure Sensors'],
    features: [
      'Automatic helmet-wear detection via contact switch sensors',
      'Encrypted Bluetooth relay to vehicle ignition lock',
      'Low standby power consumption design',
      'Accident & tilt angle detection telemetry alert concept',
    ],
    githubUrl: 'https://github.com/duggasanibhanuprakashreddy-cmyk',
  },
  {
    id: 'rc-car',
    title: 'Bluetooth Controlled RC Car',
    badge: 'Microcontroller',
    badgeType: 'purple',
    iconName: 'Car',
    description: 'An IoT project involving Bluetooth-based control of an RC car with micro-actuation, serial command decoding, and responsive motor drivers.',
    problem: 'Navigating small robotic rovers remotely with low-latency manual steering and forward/reverse propulsion without complex external infrastructure.',
    solution: 'Employs an HC-05 serial transceiver connected to an Arduino to decode command packets from a wireless controller and drive an L298N H-bridge dual motor driver.',
    technologies: ['Arduino Uno', 'HC-05 Bluetooth Module', 'L298N Motor Driver', 'C/C++ Embedded Code'],
    features: [
      'Bi-directional speed and steering modulation via PWM signals',
      'Responsive latency under 15ms over serial stream',
      'Modular chassis wiring prepared for obstacle detection sensor add-ons',
      'Failsafe auto-stop command upon wireless disconnect',
    ],
    githubUrl: 'https://github.com/duggasanibhanuprakashreddy-cmyk',
  },
  {
    id: 'graphics-editor',
    title: 'Menu-Driven 2D Graphics Editor',
    badge: 'Algorithms',
    badgeType: 'blue',
    iconName: 'Palette',
    description: 'A programming project focused on creating and manipulating 2D graphical elements through a menu-driven interface using matrix math.',
    problem: 'Rendering, shifting, and transforming geometric figures procedurally without reliance on heavy proprietary graphic engines.',
    solution: 'A console- and window-driven graphics manipulation engine applying 2D matrix transformation algorithms (translation, scaling, shear, rotation) from first principles.',
    technologies: ['Python / C++', 'Matrix Linear Algebra', '2D Primitives', 'Console Menu Navigation'],
    features: [
      'Point transformation via homogeneous 3x3 matrix multiplication',
      'User-driven command line and visual frame execution modes',
      'Modular procedural logic and parametric dimension inputs',
      'Multi-shape coordinate persistence across transform passes',
    ],
    githubUrl: 'https://github.com/duggasanibhanuprakashreddy-cmyk',
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'reva-btech',
    period: 'Sep 2025 – Feb 2029 (Undergraduate)',
    location: 'Bengaluru, India',
    title: 'REVA University — B.Tech in Artificial Intelligence & Data Science',
    description: 'Undergraduate candidate developing fundamental competence in algorithms, computational statistics, relational databases, and machine learning primitives. Active in technical coursework and applied team labs.',
    tags: ['Data Structures', 'Python Software Design', 'Applied Mathematics'],
    accentColor: 'cyan',
  },
  {
    id: 'self-driven',
    period: 'Active Focus Areas (2025–Present)',
    title: 'Self-Driven Projects & Computational Research',
    description: 'Building small-scale algorithmic utilities, exploring end-to-end data processing pipelines using Pandas and NumPy, and practicing system prototyping with Arduino microcontrollers and sensor integration.',
    tags: ['IoT Hardware Prototypes', 'Exploratory Data Analysis', 'Model Training Logic'],
    status: 'Ongoing',
    accentColor: 'purple',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Data Analysis with Python',
    description: 'Cognitive Class / IBM partner program covering data wrangling, exploratory analysis, and statistical summary modeling.',
    organization: 'Cognitive Class',
    partnerBadge: 'IBM Partner',
    iconName: 'BarChart3',
    accentColor: 'cyan',
  },
  {
    id: 'cert-2',
    title: 'Data Visualization with Python',
    description: 'Techniques for interactive storytelling, plots, and statistical distributions using Matplotlib and Seaborn libraries.',
    organization: 'Cognitive Class',
    partnerBadge: 'IBM Partner',
    iconName: 'LineChart',
    accentColor: 'purple',
  },
  {
    id: 'cert-3',
    title: 'Python 101 for Data Science',
    description: 'Core Python logic, standard libraries, native data structures, functional paradigms, and computational foundations.',
    organization: 'IBM Developer',
    partnerBadge: 'Skills Network',
    iconName: 'Code2',
    accentColor: 'cyan',
  },
  {
    id: 'cert-4',
    title: 'Ignite Full Program',
    description: 'Intensive technical immersion program focusing on algorithmic agility, industry problem-solving, and system readiness.',
    organization: 'Ignite Academy',
    partnerBadge: 'Immersion',
    iconName: 'Rocket',
    accentColor: 'blue',
  },
];

export const LEARNING_STAGES: LearningStage[] = [
  { step: '01', title: 'Python Fundamentals & Logic', status: 'Completed', statusType: 'completed' },
  { step: '02', title: 'Data Analysis & Wrangling (NumPy, Pandas)', status: 'Completed', statusType: 'completed' },
  { step: '03', title: 'Data Visualization (Matplotlib, Seaborn)', status: 'Proficient', statusType: 'proficient' },
  { step: '04', title: 'SQL & Relational Database Modeling', status: 'Active Track', statusType: 'active' },
  { step: '05', title: 'Machine Learning Foundations (Scikit-Learn)', status: 'In Progress', statusType: 'in-progress' },
  { step: '06', title: 'Deep Learning & Real-World AI Applications', status: 'Future Horizon', statusType: 'future' },
];
