import type { Metadata } from 'next';

import Cell from '@/components/Books/Cell';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/books';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const BOOKS_URL = `${SITE_URL}/books/`;

const BOOKS_DESCRIPTION = `Books ${AUTHOR_NAME} is reading and has read on software engineering.`;

export const metadata: Metadata = createPageMetadata({
  title: 'Books',
  description: BOOKS_DESCRIPTION,
  path: '/books/',
});

export default function BooksPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: BOOKS_URL,
            name: 'Books',
            description: BOOKS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(BOOKS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Books', url: BOOKS_URL },
          ]),
        ]}
      />
      <section className="books-page">
        <header className="books-header">
          <h1 className="page-title">Books</h1>
          <p className="page-subtitle">What I&apos;m reading and have read</p>
        </header>

        <div className="books-grid">
          {data.map((book) => (
            <Cell data={book} key={book.title} />
          ))}
        </div>

        {data.some((book) => book.takeaway) && (
          <div className="books-notes">
            <h2 className="books-notes-title">Notes</h2>
            {data
              .filter((book) => book.takeaway)
              .map((book) => (
                <div className="books-note" key={book.title}>
                  <h3 className="books-note-title">{book.title}</h3>
                  <p className="books-note-text">{book.takeaway}</p>

                  {book.principles && book.principles.length > 0 && (
                    <ul className="books-note-principles">
                      {book.principles.map((principle) => (
                        <li key={principle}>{principle}</li>
                      ))}
                    </ul>
                  )}

                  {book.nextSteps && (
                    <p className="books-note-next">
                      <span className="books-note-next-label">
                        What&apos;s next:
                      </span>{' '}
                      {book.nextSteps}
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
