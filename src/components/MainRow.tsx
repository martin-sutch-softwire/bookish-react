import React, { useState } from 'react';
import type { Book } from '../types/Book';
import InnerTable from './InnerTable';
import ModalHolder from './ModalHolder';
import type { Column } from '../types/Column';

type MainRowProps = {
    book: Book;
    selectedRow: number | null;
    setSelectedRow: (r: number | null) => void;
    columns: Column[];
};

const MainRow: React.FC<MainRowProps> = ({ book, selectedRow, setSelectedRow, columns }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="table" onClick={() => (selectedRow === book.bookID ? setSelectedRow(null) : setSelectedRow(book.bookID))}>
                {columns.map((column) =>
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

export default MainRow;
