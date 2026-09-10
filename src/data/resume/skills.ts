export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Solidity',
    competency: 3,
    category: ['Languages', 'Blockchain'],
  },
  // Web Development
  {
    title: 'React',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'NestJS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Tailwind CSS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases'],
  },
  // Infrastructure
  {
    title: 'Docker',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'AWS EC2',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'GitLab CI/CD',
    competency: 4,
    category: ['Infrastructure'],
  },
  // AI & LLM
  {
    title: 'Claude Code',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Prompt Engineering',
    competency: 4,
    category: ['AI Engineering'],
  },
  {
    title: 'OpenAI API',
    competency: 4,
    category: ['AI Engineering'],
  },
  // Blockchain
  {
    title: 'Ethers.js',
    competency: 4,
    category: ['Blockchain'],
  },
  {
    title: 'Smart Contracts',
    competency: 3,
    category: ['Blockchain'],
  },
  {
    title: 'IPFS',
    competency: 3,
    category: ['Blockchain'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
