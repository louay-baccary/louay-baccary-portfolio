/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'K2LIS',
    position: 'Full Stack Engineer',
    url: 'https://gitlab.com/k2lis_tn',
    startDate: '2020-01-01',
    summary: `K2LIS builds production SaaS and blockchain platforms deployed across more than 8 countries.
    I own features end to end, from database schema to API to frontend, across React/Next.js, NestJS, and Web3 systems.`,
    highlights: [
      'Built 8+ production frontend applications (admin dashboards, PWAs, responsive web apps) with React, Next.js, TypeScript, Tailwind CSS, Redux, and Zustand, including owning the end-to-end migration of a production React application to Next.js to improve performance, SEO, and long-term maintainability.',
      'Designed scalable REST and GraphQL backends with NestJS and Node.js, with optimized PostgreSQL and MongoDB queries handling thousands of daily records.',
      'Achieved sub-500ms response times for 90%+ of API requests through Redis caching, rate limiting, and JWT-based authentication.',
      'Architected the integration of an AI-driven conversational assistant into a complex form workflow for Creation Africa/Institut Francais, generating real-time field recommendations from user profile data in production.',
      'Deployed and maintained production infrastructure on AWS EC2 with Docker, Nginx, PM2, and GitLab CI/CD pipelines, maintaining 99.9% uptime across client environments.',
      'Built event-driven blockchain payment and compensation systems on Polygon (NestJS, Prisma, BullMQ, Ethers.js), triggering milestone-based payouts from external API events.',
      'Led architecture decisions, conducted code reviews, and mentored junior developers, collaborating with international stakeholders across 8+ countries, including the United States, France, and the Gulf region, in Agile/Scrum environments.',
    ],
  },
];

export default work;
