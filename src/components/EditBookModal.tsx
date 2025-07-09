import React, { useEffect, useState } from 'react';
import type { Book } from '../types/Book';

type EditBookModalProps = {
    book?: Book;
    setShowEditBookModal: (s: boolean) => void;
}

const EditBookModal: React.FC<EditBookModalProps> = ({book, setShowEditBookModal}) => {
    const [bookDetails, setBookDetails] = useState({title: '',
        author: '',
        isbn: '',
        edition: '',
        publisher: ''
    });
    const [numCopies, setNumCopies] = useState(1);
    useEffect(() => {
        if (book) {
            setBookDetails({title: book.title,
                author: book.author,
                isbn: book.isbn,
                edition: book.edition,
                publisher: book.publisher
            });
        }
    }, [book])
    return (
    <div className="modal-blur" onClick={() => setShowEditBookModal(false)}>
        <div className="modal-container">
            <span>{book?.title}</span>
        </div>
    </div>
    )
};

export default EditBookModal;
