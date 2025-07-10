import React, { useEffect, useState } from 'react';
import type { Book } from '../types/Book';
import ModalEditBook from './ModalEditBook';
import { ModalVersion } from '../types/Modal';

type ModalHolderProps = {
    book?: Book;
    setShowModal: (s: boolean) => void;
    modalVersion: string;
}

const ModalHolder: React.FC<ModalHolderProps> = ({book, setShowModal, modalVersion}) => {
    return (
        <div className="modal-blur" onClick={(e) => {
            // setShowModal(false);
            e.stopPropagation();
            }}>
            <div className="modal-container">
                <button onClick={(e) => {
                    setShowModal(false);
                    //e.stopPropagation();
                    }}>Close</button>
                {modalVersion === ModalVersion.EDITBOOK ? <ModalEditBook book={book} setShowModal={setShowModal} /> : null}
            </div>
        </div>
    )
};

export default ModalHolder;
