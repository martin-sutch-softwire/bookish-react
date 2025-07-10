import React from 'react';
import MainTable from './MainTable';
import type { Book } from '../types/Book';
import { ModalVersion } from '../types/Modal';

type PageBooksProps = {
    allBooks: Book[];
};

const PageBooks: React.FC<PageBooksProps> = ({ allBooks }) => {
    const BookColumns = [
        {
            key: 'title',
            label: 'Title',
            content: (book: Book) => book.title,
            button: {},
            isButton: false
        },
        {
            key: 'author',
            label: 'Author',
            content: (book: Book) => book.author,
            button: {},
            isButton: false
        },
        {
            key: 'isbn',
            label: 'ISBN',
            content: (book: Book) => book.isbn,
            button: {},
            isButton: false
        },
        {
            key: 'edition',
            label: 'Edition',
            content: (book: Book) => book.edition,
            button: {},
            isButton: false
        },
        {
            key: 'publisher',
            label: 'Publisher',
            content: (book: Book) => book.publisher,
            button: {},
            isButton: false
        },
        {
            key: 'copies',
            label: 'Copies',
            content: (book: Book) => {
                return `${book.copies.filter((copy) => copy.memberID === null).length}/${book.copies.length}`;
            },
            button: {},
            isButton: false
        },
        {
            key: 'editButton',
            label: '',
            content: () => null,
            button: {
                label: 'Edit',
                action: ModalVersion.EDITBOOK
            },
            isButton: true
        }
    ] as const;

    return (
        <div>
            <MainTable allBooks={allBooks} columns={BookColumns} />
        </div>
    );
};

export default PageBooks;
