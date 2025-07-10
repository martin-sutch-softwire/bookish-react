import React from 'react';
import type { Copy } from '../types/Copy';
import type { Book } from '../types/Book';

type ModalDeleteCopyProps = {
    book?: Book;
    copy?: Copy;
    setShowModal: (s: boolean) => void;
};

const ModalDeleteCopy: React.FC<ModalDeleteCopyProps> = ({ book, copy, setShowModal }) => {
    return (
        <div>
            <p>Are you sure you want to delete this copy of {book?.title}?</p>
            {copy?.memberID ? <p>This copy is currently checked out to {copy.memberName}.</p> : null}
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button
                onClick={() => {
                    //api call
                    //if successful close modal
                    //if error show error message
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default ModalDeleteCopy;
