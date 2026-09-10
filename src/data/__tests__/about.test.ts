import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('K2LIS');
    expect(aboutMarkdown).toContain('NestJS');
  });

  it('contains the background section', () => {
    expect(aboutMarkdown).toContain('# Background');
    expect(aboutMarkdown).toContain('ESPRIT');
  });

  it('contains the interests section', () => {
    expect(aboutMarkdown).toContain('# Interests');
    expect(aboutMarkdown).toContain('blockchain');
  });

  it('contains the travel section', () => {
    expect(aboutMarkdown).toContain('# Travel');
    expect(aboutMarkdown).toContain('Tunisia');
  });

  it('contains the currently section', () => {
    expect(aboutMarkdown).toContain('# Currently');
    expect(aboutMarkdown).toContain('NVIDIA');
  });

  it('contains the get in touch section', () => {
    expect(aboutMarkdown).toContain('# Get in Touch');
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(10);
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(5);
  });
});
