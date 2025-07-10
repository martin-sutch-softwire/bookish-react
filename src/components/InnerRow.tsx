import React, { useState } from 'react';
import { CopyColumns, type Copy } from '../types/Copy';
import ModalHolder from './ModalHolder';
import type { Book } from '../types/Book';

type InnerRowProps = {
    book: Book;
    copy: Copy;
};

const InnerRow: React.FC<InnerRowProps> = ({ book, copy }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="inner-table">
                {CopyColumns.map((column) =>
                    column.isButton ? (
                        <div key={column.key}>
                            {showModal ? <ModalHolder book={book} copy={copy} setShowModal={setShowModal} modalVersion={column.button.action} /> : null}
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
                        <span key={column.key}>{column.content(copy)}</span>
                    )
                )}
            </div>
        </>
    );
};

export default InnerRow;
