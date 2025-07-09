import React, { useState } from 'react';
import { BookColumns, type Book } from '../types/Book';
import EditBookModal from './EditBookModal';

type BookRowProps = {
    book: Book;
    selectedRow: number | null;
    setSelectedRow: (r: number | null) => void;
};

const BookRow: React.FC<BookRowProps> = ({ book, selectedRow, setSelectedRow }) => {
  const [showEditBookModal, setShowEditBookModal] = useState(false);
  return (
    <>
      {showEditBookModal ? (<EditBookModal setShowEditBookModal={setShowEditBookModal}/>) : null}
      <div className="table" onClick={() => (selectedRow === book.bookID ? setSelectedRow(null) : setSelectedRow(book.bookID))}>
          {BookColumns.map((column) =>
              column.isButton ? (
                  <button
                      key={column.key}
                      onClick={(e) => {
                          e.stopPropagation();
                          // column.button.action(book);
                          setShowEditBookModal(true);
                      }}
                  >
                      {column.button.label}
                  </button>
              ) : (
                  <span key={column.key}>{column.content(book)}</span>
              )
          )}
      </div>
    </>
  );
};

export default BookRow;
