import React from 'react';
import type { Book } from '../types/Book';

type BookRowProps = {
    book: Book;
};

const BookRow: React.FC<BookRowProps> = ({ book }) => {
    return (
        <div className="table">
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.isbn}</span>
            <span>{book.edition}</span>
            <span>{book.publisher}</span>
            <span>{book.copies.length}</span>
        </div>
    );
};

export default BookRow;
