import type { Copy } from './Copy';

export type Book = {
    bookID: number;
    title: string;
    author: string;
    isbn: string;
    edition: string;
    publisher: string;
    copies: Copy[];
};

export const BookColumns = [
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
        content: (book: Book) => book.author
    },
    {
        key: 'isbn',
        label: 'ISBN',
        content: (book: Book) => book.isbn
    },
    {
        key: 'edition',
        label: 'Edition',
        content: (book: Book) => book.edition
    },
    {
        key: 'publisher',
        label: 'Publisher',
        content: (book: Book) => book.publisher
    },
    {
        key: 'copies',
        label: 'Copies',
        content: (book: Book) => {
            return `${book.copies.filter((copy) => copy.memberID === null).length}/${book.copies.length}`;
        }
    }
] as const;
