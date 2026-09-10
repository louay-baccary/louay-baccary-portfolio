export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)',
    number: 'In progress, 2026',
    link: 'https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/',
    university: 'NVIDIA / GoMyCode',
  },
  {
    title: 'Hedera Developer Certification',
    number: '2024',
    link: 'https://hedera.com/',
    university: 'Hedera Hashgraph',
  },
  {
    title: 'Certified Blockchain Developer',
    number: '2022',
    link: 'https://www.blockchain-council.org/',
    university: 'Blockchain Council',
  },
];

export default courses;
