export interface Book {
  title: string;
  author: string;
  image: string;
  link?: string;
  status: 'reading' | 'read';
  takeaway?: string;
  principles?: string[];
  nextSteps?: string;
}

const data: Book[] = [
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    image: '/images/books/designing-data-intensive-applications.jpg',
    link: 'https://dataintensive.net/',
    status: 'reading',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: '/images/books/clean-code.jpg',
    link: 'https://www.goodreads.com/book/show/3735293-clean-code',
    status: 'read',
    takeaway:
      "This is the book I recommend to every junior developer I mentor. It reframed clean code for me from a matter of taste into a professional responsibility: code is read far more often than it's written, so every shortcut I take today is a tax someone (usually future me) pays later. It changed how I review pull requests, how I name things, and how small I'm willing to let a function get before I stop and split it.",
    principles: [
      'Names should reveal intent. A variable or function name should answer why it exists and what it does without needing a comment.',
      'Functions should do one thing, do it well, and do it only. If you can extract another function with a meaningful name from it, you probably should.',
      "Comments are often an admission that the code couldn't explain itself. The best comment is the one you didn't need to write because the code was clear.",
      "Don't repeat yourself. Duplication multiplies the cost of every future change and is where bugs hide when one copy gets fixed and the other doesn't.",
      'Errors should be handled with exceptions, not error codes, and error handling should be separated from the logic it protects.',
      'Tests should be clean too: fast, independent, repeatable, self-validating, and written before the production code goes stale in your head.',
      'Leave the campsite cleaner than you found it. Small, continuous improvement beats a cleanup project that never gets scheduled.',
    ],
  },
  {
    title: 'Mastering React Test-Driven Development',
    author: 'Daniel Irvine',
    image: '/images/books/mastering-react-tdd.jpg',
    link: 'https://www.packtpub.com/en-us/product/mastering-react-test-driven-development-9781803230559',
    status: 'read',
    takeaway:
      'The outside-in workflow changed how I scope work: start from an acceptance test that describes the feature from the user’s side, then let the failing test pull each unit into existence one at a time. It forces you to write the test for behavior, not implementation, so refactoring the internals later does not mean rewriting the tests too.',
    nextSteps:
      'What I want to try next is agentic TDD: letting an AI agent drive the red-green-refactor loop itself in a real production codebase, not a demo, and seeing how far that discipline holds up under actual deadline pressure and legacy code, not a clean slate.',
  },
  {
    title: 'Git - Maîtrisez la gestion de vos versions',
    author: 'Samuel Dauzon',
    image: '/images/books/git-maitrisez-vos-versions.jpg',
    link: 'https://www.editions-eni.fr/livre/git-maitrisez-la-gestion-de-vos-versions-concepts-utilisation-et-cas-pratiques-5e-edition-9782409053535',
    status: 'read',
    takeaway:
      'Going past the daily add/commit/push into how Git actually stores objects and refs made rebase and reflog stop feeling dangerous. Knowing that almost nothing is truly lost until garbage collection runs gave me the confidence to use interactive rebase and bisect on real branches instead of avoiding them.',
  },
];

export default data;
