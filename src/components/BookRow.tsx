import React from 'react';
import { BookColumns, type Book } from '../types/Book';

type BookRowProps = {
  book: Book;
};

const BookRow: React.FC<BookRowProps> = ({ book }) => {
  return (
    <div className="table">
      {BookColumns.map((column) =>
        <span key={column.key}>{column.content(book)}</span>
      )}
    </div>
  );
};

export default BookRow;
