export type Skill = {
  name: string
  logo: string
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Project = {
  name: string
  type: string
  summary: string
  status: string
  highlights: string[]
  stack: string[]
}

export const profile = {
  name: 'Khuất Văn Nguyên',
  initials: 'KN',
  role: 'Backend Developer',
  location: 'Thach That, Ha Noi',
  email: 'nguyenkhuat29@gmail.com',
  maskedEmail: 'nguyen***29@gmail.com',
  phone: '0382795810',
  maskedPhone: '0382 *** 810',
  availability: 'Open to backend developer opportunities',
  summary:
    'Information Technology student focused on backend development, system design, and maintainable application workflows with Java, Spring Boot, Spring Security, Batch Processing, and MySQL.',
  links: [
    {
      label: 'GitHub',
      value: 'github.com/lonelystxnie',
      href: 'https://github.com/lonelystxnie',
      icon: 'https://cdn.simpleicons.org/github/000000',
    },
        {
      label: 'LinkedIn',
      value: 'Update later',
      href: '#contact',
      icon: '',
    },
    {
      label: 'Gmail',
      value: 'nguyen***29@gmail.com',
      href: 'mailto:nguyenkhuat29@gmail.com',
      icon: 'https://cdn.simpleicons.org/gmail/000000',
    },
  ],
}

export const heroStack = ['Java', 'Spring Boot', 'Spring Security', 'Batch Processing', 'MySQL']

export const stats = [
  { value: '4', label: 'Featured projects', icon: 'projects' },
  { value: '20+', label: 'Technologies used', icon: 'stack' },
  { value: '2027', label: 'Expected graduation', icon: 'growth' },
  { value: 'BE', label: 'Backend focused', icon: 'check' },
]

export const skills: Skill[] = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Spring Security', logo: 'https://cdn.simpleicons.org/springsecurity/000000' },
  { name: 'Batch Processing', logo: 'https://cdn.simpleicons.org/apache/000000' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux Toolkit', logo: 'https://cdn.simpleicons.org/redux/764ABC' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/000000' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'DBeaver', logo: 'https://cdn.simpleicons.org/dbeaver/000000' },
]

export const stackLogos: Record<string, string> = {
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Spring Security': 'https://cdn.simpleicons.org/springsecurity/000000',
  'Batch Processing': 'https://cdn.simpleicons.org/apache/000000',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Redux Toolkit': 'https://cdn.simpleicons.org/redux/764ABC',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.simpleicons.org/express/000000',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Socket.io': 'https://cdn.simpleicons.org/socketdotio/000000',
  'Gemini AI': 'https://cdn.simpleicons.org/googlegemini/000000',
  Cloudinary: 'https://cdn.simpleicons.org/cloudinary/000000',
  'MoMo API': 'https://cdn.simpleicons.org/momo/000000',
  'Google OAuth': 'https://cdn.simpleicons.org/google/000000',
  'API Gateway': 'https://cdn.simpleicons.org/kong/000000',
  JWT: 'https://cdn.simpleicons.org/jsonwebtokens/000000',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'Framer Motion': 'https://cdn.simpleicons.org/framer/000000',
  Vercel: 'https://cdn.simpleicons.org/vercel/000000',
}

export const experiences: Experience[] = [

  {
    role: 'Backend-focused Developer',
    company: 'Personal Project Practice',
    period: '2025 - 2026',
    location: 'Project-based',
    summary:
      'Built and collaborated on full-stack projects involving authentication, payment, logistics, real-time communication, API design, and database-backed workflows.',
    highlights: ['JWT and OAuth authentication', 'Payment and shipping integrations', 'Multi-role application workflows'],
    stack: ['Java', 'Batch Processing', 'Node.js', 'Express.js', 'MySQL'],
  },  {
    role: 'Backend Developer Intern',
    company: 'Mock Backend Lab',
    period: '2026',
    location: 'Remote',
    summary:
      'Practiced building secure backend modules with Spring Boot, Spring Security, batch-style processing, and relational database workflows.',
    highlights: ['REST API module design', 'Spring Security authentication flow', 'Scheduled batch processing practice'],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Batch Processing', 'MySQL'],
  },
]

export const projects: Project[] = [
  {
    name: 'ClickGo E-commerce System',
    type: 'Full-stack e-commerce platform',
    status: 'Team project',
    summary:
      'Three-platform e-commerce ecosystem for Customer, Admin, and Shipper flows, with AI assistant, logistics integration, real-time notifications, and secured role-based access.',
    highlights: ['RAG shopping assistant with Gemini AI', 'GHN shipping calculation and delivery tracking', 'JWT, Google OAuth 2.0, and RBAC'],
    stack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Gemini AI', 'Cloudinary'],
  },
  {
    name: 'Rental Room Management System',
    type: 'Property management platform',
    status: 'Team project',
    summary:
      'Rental management ecosystem with dashboards for tenants, landlords, and administrators, supporting listings, contracts, invoicing, expenses, and payment flows.',
    highlights: ['Multi-role dashboards', 'MoMo payment gateway integration', 'Google OAuth 2.0 authentication'],
    stack: ['Node.js', 'Express.js', 'React', 'MySQL', 'Tailwind CSS', 'MoMo API', 'Google OAuth'],
  },
  {
    name: 'F8 Education Clone',
    type: 'Microservices learning platform',
    status: 'Team project',
    summary:
      'Education platform clone with six independent services, centralized API Gateway, course delivery, learning paths, blog, enrollment, and distributed authentication.',
    highlights: ['Six-service microservices ecosystem', 'Centralized API Gateway routing', 'JWT authentication across services'],
    stack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'API Gateway', 'Tailwind CSS', 'JWT'],
  },
]





