import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s Resume. Full Stack Engineer at K2LIS, 6+ years building production SaaS and blockchain platforms.`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <div className="resume-header-row">
            <h1 className="resume-title">Resume</h1>
            <a
              href="/louay-baccary-resume.pdf"
              download
              className="resume-download-link"
            >
              Download PDF
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="resume-summary">
            Full Stack Engineer with 6+ years of experience designing and
            deploying end-to-end web applications, from React and Next.js
            frontends to Node.js and NestJS backends. Delivered 8+ production
            platforms across 8+ countries, and built event-driven blockchain
            payment systems on Polygon. Uses Claude Code daily in production.
          </p>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable, linkable, and reads from the shared profile. The
              screen layout carries these in the footer, which print hides. */}
          <address className="resume-print-contact">
            <a href={`${SITE_URL}/`}>{SITE_URL.replace(/^https?:\/\//, '')}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href="https://www.linkedin.com/in/louay-baccary/">
              linkedin.com/in/louay-baccary
            </a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
