/**
 * Central portfolio data — Rajat Roy.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rajat Roy',
  displayName: 'Rajat Roy',
  firstName: 'RAJAT',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A ROY ORIGINAL',
  role: 'Full-Stack Android Developer',
  tagline: ['Cyberexpert', 'Full-Stack Developer'],
  intro:
    'A Software Engineering student and Full-Stack Android Developer in training, building personal and community-oriented apps with Kotlin, Jetpack Compose, Java, Python, Spring Boot, Node.js and PostgreSQL.',
  location: 'Dhaka, Bangladesh',
  /** Add your public email / LinkedIn URL here — the buttons stay hidden while these are empty. */
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/rajatroy03',
    github: 'https://github.com/rroyops',
  },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rajat Roy',
  },
  interests: ['Android Apps', 'Community-oriented Apps', 'Full-Stack Development', 'Cybersecurity'],
};

export const education = [
  {
    school: 'Daffodil International University',
    place: 'Dhaka',
    degree: "Bachelor's — Software Engineering",
    period: 'Present',
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional screenshot shown in the project overlay. */
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'guardianx',
    title: 'GuardianX',
    year: 'Cyber',
    genre: 'Android • Cybersecurity • Safety',
    logline: 'An emergency SOS app that broadcasts distress signals, tracks a live defense-engine state and keeps its event log tamper-evident.',
    stack: ['Android', 'GPS', 'Haptics', 'SHA-256'],
    build: [
      'Built GuardianX, an Android emergency-response app with a one-tap SOS that broadcasts an active emergency, with a discreet beacon mode and a one-tap resolve.',
      'Added a Defense Engine telemetry panel showing the state machine, session identifier, trigger origin, GPS coordinates, a haptic SOS Morse waveform and a SHA-256 chained integrity hash.',
      'Organised the app into Emergency, Contacts, Hardware, Scanner, Vault and Settings sections.',
    ],
    features: [
      'One-tap SOS broadcast with active / resolve states',
      'Discreet beacon mode',
      'Live defense-engine telemetry & GPS coordinates',
      'Haptic SOS Morse waveform',
      'SHA-256 chained integrity hash',
      'Contacts, Hardware, Scanner & Vault sections',
    ],
    metrics: [
      { value: 'SOS', label: 'one-tap emergency broadcast' },
      { value: 'SHA-256', label: 'chained integrity hash' },
      { value: 'GPS', label: 'live coordinates' },
      { value: '6', label: 'app sections' },
    ],
    image: '/assets/guardianx.webp',
    palette: { from: '#04121f', via: '#0b3a5c', to: '#05080d', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'lifeflow',
    title: 'LifeFlow',
    year: 'Android',
    genre: 'Android • Productivity',
    logline: 'An Android task manager — one of the featured projects on my GitHub.',
    stack: ['Android'],
    build: [
      'Built LifeFlow, an Android task manager, as part of my journey to becoming a full-stack Android developer.',
    ],
    features: ['Android app', 'Task management', 'Featured on GitHub'],
    metrics: [
      { value: 'Android', label: 'mobile app' },
      { value: 'Tasks', label: 'task manager' },
    ],
    // Add `github: 'https://github.com/rroyops/<repo-name>',` once you want the GitHub button to show.
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'attendance-app',
    title: 'Attendance App',
    year: 'Full-Stack',
    genre: 'Flutter • Node.js • On-device ML',
    logline: 'A real-time attendance app with on-device face verification, offline caching and admin analytics.',
    stack: ['Flutter', 'Node.js', 'Express', 'Socket.IO', 'ML Kit', 'TFLite', 'JWT'],
    build: [
      'Built a Flutter + Node.js/Express attendance application with real-time Socket.IO sync, on-device face verification via ML Kit / TFLite, offline caching, JWT authentication and admin analytics.',
      'Ran a static-analysis and bug-fix pass covering timezone handling, Dio interceptor loops, face-embedding stub replacement and stream-subscription leaks.',
    ],
    features: [
      'Real-time sync with Socket.IO',
      'On-device face verification (ML Kit / TFLite)',
      'Offline caching',
      'JWT authentication',
      'Admin analytics',
    ],
    metrics: [
      { value: 'Real-time', label: 'Socket.IO sync' },
      { value: 'On-device', label: 'face verification' },
      { value: 'Offline', label: 'caching' },
      { value: 'JWT', label: 'authentication' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'room-320',
    title: 'Room No. 320 Environment',
    year: 'Web',
    genre: 'PHP • MySQL • Security',
    logline: 'A full community web project with a secure PHP/MySQL backend, dark/light mode and a complete SQL schema.',
    stack: ['PHP', 'MySQL', 'Bootstrap 5', 'XAMPP'],
    build: [
      'Built a complete community web project for XAMPP with PHP and MySQL, styled with Bootstrap 5 and shipped with a full SQL schema.',
      'Secured it with CSRF and XSS protection and added a dark / light mode toggle.',
    ],
    features: ['PHP / MySQL backend', 'Bootstrap 5 interface', 'CSRF & XSS protection', 'Dark / light mode', 'Complete SQL schema'],
    metrics: [
      { value: 'CSRF', label: 'protection' },
      { value: 'XSS', label: 'protection' },
      { value: 'Dark/Light', label: 'theme modes' },
      { value: 'Full', label: 'SQL schema' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'pothsheba',
    title: 'PothSheba',
    year: 'Capstone',
    genre: 'IoT • AI • System Design',
    logline: 'An IoT and AI based road-assistance system — my SE231 System Analysis & Design capstone (Group 01).',
    stack: ['IoT', 'AI', 'ESP32 / Arduino', 'Database design', 'UML'],
    build: [
      'Part of a group project proposing PothSheba, an IoT and AI based road-assistance system, presented as a full proposal deck.',
      'Worked on the system-analysis side — use case diagram, ERD and database design — plus the ESP32 / Arduino prototype story.',
    ],
    features: ['IoT + AI road assistance', 'Proposal presentation', 'Use case diagram & ERD', 'ESP32 / Arduino prototype'],
    metrics: [
      { value: 'IoT + AI', label: 'road assistance' },
      { value: 'SE231', label: 'capstone course' },
      { value: 'Group 01', label: 'team project' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Android & Mobile',
    subtitle: 'The main focus',
    skills: [
      { name: 'Kotlin', mono: 'Kt' },
      { name: 'Jetpack Compose', mono: 'Jc' },
      { name: 'Android', mono: 'An' },
      { name: 'Flutter', mono: 'Fl' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Across the stack',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'Kotlin', mono: 'Kt' },
      { name: 'PHP', mono: 'Ph' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Socket.IO', mono: 'Si' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Schemas & storage',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Cyber-minded building',
    skills: [
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'CSRF / XSS Protection', mono: 'Cx' },
      { name: 'Man-in-the-Middle Awareness', mono: 'Mi' },
      { name: 'SHA-256 Integrity Chains', mono: 'Sh' },
    ],
  },
  {
    id: 'tools',
    title: 'Web & Tools',
    subtitle: 'Shipping & workflow',
    skills: [
      { name: 'Bootstrap 5', mono: 'Bs' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'GitHub Actions', mono: 'Ga' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'University coursework',
    skills: [
      { name: 'OOP', mono: 'Oo' },
      { name: 'Algorithms', mono: 'Al' },
      { name: 'Software Project Management', mono: 'Pm' },
      { name: 'System Analysis & Design', mono: 'Sa' },
    ],
  },
];

/** Cross-references shown when a skill card is hovered/tapped: where the skill shows up in the projects. */
export const skillEvidence: Record<string, string[]> = {
  Kotlin: ['Android development'],
  'Jetpack Compose': ['Android development'],
  Android: ['LifeFlow'],
  Flutter: ['Attendance App'],
  Java: ['SE216 Object-Oriented Programming'],
  PHP: ['Room No. 320 Environment'],
  'Node.js': ['Attendance App'],
  'Express.js': ['Attendance App'],
  'Socket.IO': ['Attendance App'],
  MySQL: ['Room No. 320 Environment'],
  'JWT Auth': ['Attendance App'],
  'CSRF / XSS Protection': ['Room No. 320 Environment'],
  'SHA-256 Integrity Chains': ['GuardianX'],
  'Man-in-the-Middle Awareness': ['Cybersecurity awareness presentation'],
  'Bootstrap 5': ['Room No. 320 Environment'],
  'GitHub Actions': ['GitHub profile README (self-hosted stats)'],
  OOP: ['SE216 Object-Oriented Programming'],
  Algorithms: ['Bellman-Ford coursework'],
  'Software Project Management': ['SE411'],
  'System Analysis & Design': ['PothSheba', 'SE231'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Pilot',
    period: 'Present',
    synopsis: 'Software Engineering at Daffodil International University — where the foundations get built.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: "Bachelor's student in Software Engineering at Daffodil International University.",
        tags: ['Software Engineering', 'DIU'],
        runtime: 'Present',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Coursework',
        description: 'Object-Oriented Programming (SE216), Software Project Management (SE411) and algorithms — from Java lab reports to Bellman-Ford.',
        tags: ['OOP', 'Java', 'Algorithms'],
        runtime: 'SE216 · SE411',
        palette: crimson,
      },
      {
        code: 'S01 E03',
        title: 'The Analyst',
        description: 'SE231 System Analysis & Design capstone — use case diagrams, ERD and database design for the PothSheba proposal.',
        tags: ['UML', 'ERD', 'SE231'],
        runtime: 'SE231',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: 'Android & Full-Stack',
    synopsis: 'Android with Kotlin and Jetpack Compose, backends with Spring Boot, Node.js and PostgreSQL.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Android Dev',
        description: 'Full-Stack Android Developer in training — Kotlin and Jetpack Compose, with LifeFlow as the featured Android task manager.',
        tags: ['Kotlin', 'Jetpack Compose', 'Android'],
        runtime: 'In training',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The Backend',
        description: 'Servers and REST APIs with Spring Boot and Node.js, backed by PostgreSQL.',
        tags: ['Spring Boot', 'Node.js', 'PostgreSQL'],
        runtime: 'Back-end',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Polyglot',
        description: 'Java, Python and Kotlin — plus PHP/MySQL for Room No. 320 and Flutter for the attendance app.',
        tags: ['Java', 'Python', 'PHP', 'Flutter'],
        runtime: 'Many languages',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: 'Originals',
    synopsis: 'Five Originals — a cyber-safety SOS app, a task manager, a real-time attendance app, a community web platform and an IoT + AI road-assistance capstone.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Mobile Builder',
        description: 'Attendance App — Flutter + Node.js with real-time Socket.IO sync, on-device face verification and offline caching.',
        tags: ['Flutter', 'Node.js', 'Socket.IO'],
        runtime: 'Full-stack',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Community Builder',
        description: 'Room No. 320 Environment — a PHP/MySQL community web project with CSRF/XSS security and dark/light mode.',
        tags: ['PHP', 'MySQL', 'Bootstrap 5'],
        runtime: 'Web',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'The Capstone',
        description: 'PothSheba — an IoT and AI based road-assistance system, taken from proposal to presentation.',
        tags: ['IoT', 'AI', 'ESP32'],
        runtime: 'Group 01',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Cyber & Craft',
    period: 'Side stories',
    synopsis: 'Security awareness, a custom-built GitHub profile and projects made for the people around me.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Cyberexpert',
        description: 'Built GuardianX, an SOS app with a SHA-256 chained integrity log, and a 13-slide cybersecurity awareness presentation, including a custom Man-in-the-Middle diagram.',
        tags: ['Cybersecurity', 'MITM'],
        runtime: '13 slides',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Profile Crafter',
        description: 'Overhauled my GitHub profile README — animated SVG banners, self-hosted GitHub stats via GitHub Actions and a contribution snake.',
        tags: ['GitHub Actions', 'SVG', 'README'],
        runtime: 'rroyops',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Maker',
        description: 'Birthday web pages and group presentations — built for the people in my circle.',
        tags: ['HTML', 'Presentations'],
        runtime: 'For friends',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'More personal and community-oriented apps.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Growing from Full-Stack Android Developer in training into a full-stack builder of apps people actually use.',
        tags: ['Android', 'Full-Stack', 'Community apps'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Identity', title: 'Android', detail: 'Full-Stack Android Developer in training', palette: jade },
  { label: 'Cyber project', title: 'GuardianX', detail: 'SOS app • SHA-256 integrity chain', palette: crimson },
  { label: 'Featured project', title: 'LifeFlow', detail: 'Android task manager', palette: amber },
  { label: 'Full-stack', title: 'Attendance App', detail: 'Flutter + Node.js • Socket.IO', palette: ocean },
  { label: 'On-device ML', title: 'Face Verify', detail: 'ML Kit / TFLite, offline-first', palette: violet },
  { label: 'Capstone', title: 'PothSheba', detail: 'IoT + AI road assistance', palette: crimson },
  { label: 'Security', title: 'CSRF / XSS', detail: 'Room No. 320 Environment', palette: jade },
  { label: 'Backend', title: 'Spring Boot', detail: 'with Node.js & PostgreSQL', palette: amber },
  { label: 'University', title: 'Software Eng.', detail: 'Daffodil International University', palette: violet },
  { label: 'On GitHub', title: 'rroyops', detail: 'Animated README • self-hosted stats', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Software Engineering',
    lines: ['Daffodil International University', "Bachelor's student"],
    chips: ['OOP', 'Algorithms', 'SPM'],
  },
  {
    kicker: 'Skills',
    title: 'Android first.',
    lines: ['Kotlin, Jetpack Compose · Java, Python', 'Spring Boot, Node.js · PostgreSQL, MySQL'],
    chips: ['Kotlin', 'Compose', 'Java', 'Python', 'Spring Boot', 'Node.js', 'PostgreSQL'],
  },
  {
    kicker: 'Projects',
    title: 'Five Originals',
    lines: ['GuardianX — SOS & cyber-safety app', 'LifeFlow — Android task manager', 'Attendance App — Flutter + Node.js, real-time', 'Room No. 320 Environment — PHP/MySQL community web', 'PothSheba — IoT + AI road assistance'],
  },
  {
    kicker: 'Cyber',
    title: 'Security-minded.',
    lines: ['JWT auth · CSRF / XSS protection', 'Cybersecurity awareness presentation'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Personal and community-oriented apps', 'Full-Stack Android Developer in training'],
  },
];

export type ProfileId = 'rajat' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rajat',
    name: 'Rajat',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Profile sheet & skills first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length} highlights`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  story: { nav: 'Profile', card: 'The Full Story', meta: 'Everything on one page', palette: violet },
};
