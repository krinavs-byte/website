// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Krina Vagadia',
    title: 'Student | Christ university',
    image: getAsset(''), // Customize or replace with your profile image
    description:
      'I’m a first-year B.Sc. Economics and Data Science student passionate about finance and analytics. I am keen to explore how data, leveraging tools like Python and Excel, can reveal financial trends and support smarter economic decisions.\n' +
      '\n' +
      'As I progress in my studies and grow my skills, I seek opportunities to apply what I learn through meaningful projects, collaborations, and real-world experiences.\n' +
      '\n' +
      'I also intend to contribute in volunteering work for the society.\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Continuously learning, consistently improving',
    location: 'Bengaluru, India',
  },

  seo: {
    title: 'Krina Vagadia – Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Student', 'Economics with Data analytics', 'finance', 'economics'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ University',
      degree: 'B.Sc. Economiccs with Data Science',
      year: '2025-2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Brief description of your focus or thesis'],
    },
    {
      institution: 'CMR NPUC',
      degree: 'Higher Secondary',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Science-PCMB'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Entreprenuership ad Managemnet skill',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Vignette Windows - A Writers Guild',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Christ University',
      time: '(2025– Present)',
      desp: ['Conducted field research at college events, interviewing performers, organizers, and spectators to capture diverse perspectives on event dynamics and participant experiences.', 'Connected with performers, organizers, and students at college events, helping create engaging stories that captured the real energy of campus life.'],
    },
    {
      title: 'CUSBMA | Working Committee Member - Hospitality Committee',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Christ University',
      time: '(2025-Present)',
      desp: ['Served as primary hospitality contact for guests and judges at CUSBMA events, ensuring smooth experiences for industry experts.', 'Gained direct exposure to industry leaders through frontline interactions, building professional networks while maintaining high standards.'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'News Headline',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'An Application that can categorize news headlines into different topics.',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'krina.vagadia@bscedsh.christuniversity.in',
    linkedin: 'www.linkedin.com/in/krina-vagadia-a68138321/',
    github: 'https://github.com/krinavs-byte',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
