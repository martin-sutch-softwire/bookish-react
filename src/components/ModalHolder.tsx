import React from 'react';
import type { Book } from '../types/Book';
import ModalEditBook from './ModalEditBook';
import { ModalVersion } from '../types/Modal';
import type { Copy } from '../types/Copy';
import ModalDeleteCopy from './ModalDeleteCopy';

type ModalHolderProps = {
    book?: Book;
    copy?: Copy;
    setShowModal: (s: boolean) => void;
    modalVersion: string;
};

const ModalHolder: React.FC<ModalHolderProps> = ({ book, copy, setShowModal, modalVersion }) => {
    return (
        <div
            className="modal-blur"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className="modal-container">
                <button
                    onClick={(e) => {
                        setShowModal(false);
                    }}
                >
                    Close
                </button>
                {modalVersion === ModalVersion.EDITBOOK ? <ModalEditBook book={book} setShowModal={setShowModal} /> : null}
                {modalVersion === ModalVersion.DELETECOPY ? <ModalDeleteCopy book={book} copy={copy} setShowModal={setShowModal} /> : null}
            </div>
        </div>
    );
};

export default ModalHolder;
