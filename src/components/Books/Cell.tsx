import Image from 'next/image';

import type { Book } from '@/data/books';
import { BOOK_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Book;
}

export default function Cell({ data }: CellProps) {
  const { title, author, image, link, status } = data;

  const cardContent = (
    <>
      <div className="book-card-image">
        <Image
          src={image}
          alt=""
          width={BOOK_IMAGE.width}
          height={BOOK_IMAGE.height}
          sizes="(max-width: 600px) 50vw, 25vw"
        />
        {status === 'reading' && (
          <span className="book-card-status">Reading</span>
        )}
      </div>
      <p className="book-card-title">{title}</p>
      <p className="book-card-author">{author}</p>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="book-card"
        aria-label={`${title} by ${author}`}
      >
        {cardContent}
      </a>
    );
  }

  return <div className="book-card">{cardContent}</div>;
}
