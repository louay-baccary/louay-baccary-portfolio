export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  video?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Authencia',
    subtitle: 'Document authentication SaaS',
    link: 'https://authencia.k2lis.com/',
    image: '/images/projects/authencia.svg',
    video: '/videos/authencia-demo.mp4',
    date: '2022-01-01',
    desc: 'SaaS document authentication platform deployed for Tunisian universities and government institutions, with a Node.js/Express backend, MongoDB, zero-knowledge proof verification, IPFS-backed integrity guarantees, and full CI/CD.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'IPFS',
      'snarkjs',
      'Hedera',
    ],
    featured: true,
  },
  {
    title: 'Creation Africa / Institut Francais AI Assistant',
    subtitle: 'AI-driven form workflow',
    link: 'https://www.creationafrica.com/en/',
    image: '/images/projects/creation-africa.svg',
    video: '/videos/creation-africa-demo.mp4',
    date: '2023-06-01',
    desc: 'Architected the integration of an AI conversational assistant into a complex, multi-step form workflow, generating real-time field recommendations from user profile data in production.',
    tech: ['Next.js', 'GraphQL', 'OpenAI API'],
    featured: true,
  },
  {
    title: 'Evoke Hub Payment System',
    subtitle: 'Event-driven blockchain payments',
    link: 'https://gitlab.com/louayBaccary/cu-hackaton',
    image: '/images/projects/evoke.svg',
    date: '2024-03-01',
    desc: 'Event-driven blockchain payment system that polls an external API for milestone events and triggers USDC payouts to student teams on Polygon.',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'BullMQ', 'Ethers.js', 'Polygon'],
    featured: true,
  },
  {
    title: 'Shill',
    subtitle: 'Web3 GameFi social platform',
    image: '/images/projects/shill.svg',
    date: '2022-06-01',
    desc: 'A GameFi social platform combining a post feed, wallet-based login, and ERC-1155 token rewards, shipped across a frontend, backend, browser extension, and white-label app.',
    tech: ['React', 'Next.js', 'Solidity', 'Web3.js', 'MongoDB'],
  },
];

export default data;
