import React, { useState } from 'react';
import { BookColumns, type Book } from '../types/Book';
import InnerTable from './InnerTable';
import ModalHolder from './ModalHolder';

type BookRowProps = {
    book: Book;
    selectedRow: number | null;
    setSelectedRow: (r: number | null) => void;
};

const BookRow: React.FC<BookRowProps> = ({ book, selectedRow, setSelectedRow }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="table" onClick={() => (selectedRow === book.bookID ? setSelectedRow(null) : setSelectedRow(book.bookID))}>
                {BookColumns.map((column) =>
                    column.isButton ? (
                        <div key={column.key}>
                            {showModal ? <ModalHolder book={book} setShowModal={setShowModal} modalVersion={column.button.action} /> : null}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowModal(true);
                                }}
                            >
                                {column.button.label}
                            </button>
                        </div>
                    ) : (
                        <span key={column.key}>{column.content(book)}</span>
                    )
                )}
            </div>
            {selectedRow === book.bookID ? <InnerTable copies={book.copies} book={book} /> : null}
        </>
    );
};

export default BookRow;
