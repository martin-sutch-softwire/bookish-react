import React from 'react';
import { BookColumns, type Book } from '../types/Book';
import InnerTable from './InnerTable';

type BookRowProps = {
    book: Book;
    selectedRow: number | null;
    setSelectedRow: (r: number | null) => void;
};

const BookRow: React.FC<BookRowProps> = ({ book, selectedRow, setSelectedRow }) => {
    return (
        <>
            <div className="table" onClick={() => (selectedRow === book.bookID ? setSelectedRow(null) : setSelectedRow(book.bookID))}>
                {BookColumns.map((column) =>
                    column.isButton ? (
                        <button
                            key={column.key}
                            onClick={(e) => {
                                e.stopPropagation();
                                column.button.action(book);
                            }}
                        >
                            {column.button.label}
                        </button>
                    ) : (
                        <span key={column.key}>{column.content(book)}</span>
                    )
                )}
            </div>
            {selectedRow === book.bookID ? <InnerTable copies={book.copies} /> : null}
        </>
    );
};

export default BookRow;
