import { describe, expect, it } from 'vitest';

import books from '../books';

describe('books data', () => {
  it('exports an array of books', () => {
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBeGreaterThan(0);
  });

  it('each book has required properties', () => {
    for (const book of books) {
      expect(book).toHaveProperty('title');
      expect(book).toHaveProperty('author');
      expect(book).toHaveProperty('image');
      expect(book).toHaveProperty('status');

      expect(typeof book.title).toBe('string');
      expect(typeof book.author).toBe('string');
      expect(typeof book.image).toBe('string');
      expect(['reading', 'read']).toContain(book.status);
    }
  });

  it('image paths start with /', () => {
    for (const book of books) {
      expect(book.image.startsWith('/')).toBe(true);
    }
  });

  it('links are valid URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const book of books) {
      if (book.link) {
        expect(book.link).toMatch(urlRegex);
      }
    }
  });

  it('has unique book titles', () => {
    const titles = books.map((b) => b.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('has at least one book currently being read', () => {
    expect(books.some((b) => b.status === 'reading')).toBe(true);
  });

  it('takeaway is a non-empty string when present', () => {
    for (const book of books) {
      if (book.takeaway !== undefined) {
        expect(typeof book.takeaway).toBe('string');
        expect(book.takeaway.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('principles is a non-empty array of non-empty strings when present', () => {
    for (const book of books) {
      if (book.principles !== undefined) {
        expect(Array.isArray(book.principles)).toBe(true);
        expect(book.principles.length).toBeGreaterThan(0);
        for (const principle of book.principles) {
          expect(typeof principle).toBe('string');
          expect(principle.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('has unique principles within a book', () => {
    for (const book of books) {
      if (book.principles) {
        expect(new Set(book.principles).size).toBe(book.principles.length);
      }
    }
  });

  it('nextSteps is a non-empty string when present', () => {
    for (const book of books) {
      if (book.nextSteps !== undefined) {
        expect(typeof book.nextSteps).toBe('string');
        expect(book.nextSteps.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
