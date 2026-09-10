import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m a {profile.role} at {profile.employer}, full stack end to
            end: React and Next.js interfaces, Node.js and NestJS APIs, and the
            infrastructure underneath. I started in the pre-AI era, learning
            from raw documentation and trial and error, and I&apos;ve carried
            that discipline into the agentic era, using{' '}
            <a href="https://claude.com/code" className="hero-highlight">
              Claude Code
            </a>{' '}
            daily in production and shipping AI-driven features like a live
            conversational assistant. I&apos;ve delivered 8+ platforms across 8+
            countries, including event-driven blockchain payment systems on
            Polygon.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <a
            href="https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/"
            className="hero-cert"
          >
            {/* biome-ignore lint/performance/noImgElement: small local SVG badge, no next/image runtime needed */}
            <img
              src="/images/logos/nvidia.svg"
              alt="NVIDIA"
              className="hero-cert-logo"
            />
            <span>NCA: Generative AI LLMs, In Progress</span>
          </a>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
