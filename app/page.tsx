import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import books from '@/data/books';
import projects from '@/data/projects';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import {
  AUTHOR_NAME,
  BOOK_IMAGE,
  PROJECT_IMAGE,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  // The homepage builds its openGraph in the root layout, so it only needs
  // the canonical here. `trailingSlash: true` makes `/` the canonical form.
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  const currentlyReading = books.find((book) => book.status === 'reading');
  const featuredProject =
    projects.find((project) => project.title === 'Authencia') ?? projects[0];

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      {featuredProject && (
        <section className="home-work" aria-labelledby="home-work-title">
          <div className="home-work-header">
            <div>
              <span className="home-section-kicker">Recent work</span>
              <h2 id="home-work-title" className="sr-only">
                Recent work
              </h2>
            </div>
            <Link href="/projects/" className="home-work-all">
              View all
            </Link>
          </div>
          <Link href="/projects/" className="home-work-item">
            <span className="home-work-image">
              {featuredProject.video ? (
                <video
                  src={featuredProject.video}
                  poster={featuredProject.image}
                  width={PROJECT_IMAGE.width}
                  height={PROJECT_IMAGE.height}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                />
              ) : (
                <Image
                  src={featuredProject.image}
                  alt=""
                  width={PROJECT_IMAGE.width}
                  height={PROJECT_IMAGE.height}
                />
              )}
            </span>
            <span className="home-work-content">
              <span className="home-work-title">{featuredProject.title}</span>
              <span className="home-work-desc">{featuredProject.desc}</span>
            </span>
          </Link>
        </section>
      )}
      {currentlyReading && (
        <section className="home-reading" aria-labelledby="home-reading-title">
          <span className="home-section-kicker">Currently reading</span>
          <h2 id="home-reading-title" className="sr-only">
            Currently reading
          </h2>
          <Link href="/books/" className="home-reading-item">
            <span className="home-reading-image">
              <Image
                src={currentlyReading.image}
                alt=""
                width={BOOK_IMAGE.width}
                height={BOOK_IMAGE.height}
              />
            </span>
            <span>
              <span className="home-reading-title">
                {currentlyReading.title}
              </span>
              <br />
              <span className="home-reading-author">
                {currentlyReading.author}
              </span>
            </span>
          </Link>
        </section>
      )}
    </PageWrapper>
  );
}
