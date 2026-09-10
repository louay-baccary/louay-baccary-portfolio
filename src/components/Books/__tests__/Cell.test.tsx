import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Cell from '../Cell';

describe('Cell', () => {
  const mockBook = {
    title: 'Test Book',
    author: 'Test Author',
    image: '/images/books/test.jpg',
    link: 'https://example.com',
    status: 'read' as const,
  };

  it('renders a linked book card', () => {
    render(<Cell data={mockBook} />);
    const link = screen.getByRole('link', {
      name: `${mockBook.title} by ${mockBook.author}`,
    });
    expect(link).toHaveAttribute('href', mockBook.link);
  });

  it('renders title and author', () => {
    render(<Cell data={mockBook} />);
    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
    expect(screen.getByText(mockBook.author)).toBeInTheDocument();
  });

  it('shows a reading badge only when currently reading', () => {
    const { rerender } = render(<Cell data={mockBook} />);
    expect(screen.queryByText('Reading')).not.toBeInTheDocument();

    rerender(<Cell data={{ ...mockBook, status: 'reading' }} />);
    expect(screen.getByText('Reading')).toBeInTheDocument();
  });

  it('renders as a static card without a link when none is provided', () => {
    render(<Cell data={{ ...mockBook, link: undefined }} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
