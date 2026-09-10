'use client';

import { useEffect, useState } from 'react';

const sections = [
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'courses' },
  { name: 'References', id: 'references' },
] as const;

type SectionId = (typeof sections)[number]['id'];

/**
 * Distance from the top of the viewport, in pixels, past which a section is
 * considered "reached". Needs to clear the fixed header plus the sticky
 * resume nav bar itself.
 */
const SCROLL_OFFSET = 140;

/**
 * Walks sections in document order and returns the last one whose top has
 * scrolled past SCROLL_OFFSET.
 *
 * An intersection-ratio comparison used to drive this instead, but it
 * compared sections against each other rather than against a fixed line, so
 * a short section (Certifications) could lose to a taller neighbor (Skills)
 * even after being scrolled to, especially once the ratio-based fallback
 * picked whichever section merely had its top closest to zero. Walking in
 * document order against one fixed offset has no such race: whichever
 * section was reached last, in reading order, wins.
 */
function findActiveSection(): SectionId {
  let active: SectionId = sections[0].id;

  for (const { id } of sections) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= SCROLL_OFFSET) {
      active = id;
    }
  }

  return active;
}

export default function ResumeNav() {
  const [activeSection, setActiveSection] = useState<SectionId>('experience');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setActiveSection(findActiveSection());
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="resume-nav" aria-label="Resume sections">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`resume-nav-link ${activeSection === section.id ? 'active' : ''}`}
          aria-current={activeSection === section.id ? 'location' : undefined}
        >
          {section.name}
        </a>
      ))}
    </nav>
  );
}
