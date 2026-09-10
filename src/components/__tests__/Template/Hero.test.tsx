import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Louay Baccary');
  });

  it('describes the current role and daily Claude Code use', () => {
    const { container } = render(<Hero />);

    const claudeCodeLink = screen.getByRole('link', { name: /claude code/i });
    expect(claudeCodeLink).toHaveAttribute('href', 'https://claude.com/code');
    expect(claudeCodeLink).toHaveClass('hero-highlight');

    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      "I'm a Full Stack Engineer at K2LIS, full stack end to end: React and Next.js interfaces, Node.js and NestJS APIs, and the infrastructure underneath. I started in the pre-AI era, learning from raw documentation and trial and error, and I've carried that discipline into the agentic era, using Claude Code daily in production and shipping AI-driven features like a live conversational assistant. I've delivered 8+ platforms across 8+ countries, including event-driven blockchain payment systems on Polygon.",
    );
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
    expect(screen.queryByText('Stanford ICME')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
