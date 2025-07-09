import React, { useState } from 'react';
import { BookColumns, type Book } from '../types/Book';
import EditBookModal from './EditBookModal';

type BookRowProps = {
  book: Book;
};

const BookRow: React.FC<BookRowProps> = ({ book}) => {
  const [showEditBookModal, setShowEditBookModal] = useState(false);
  return (
    <>
      {showEditBookModal ? (<EditBookModal setShowEditBookModal={setShowEditBookModal}/>) : null}
      <div className="table" >
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
