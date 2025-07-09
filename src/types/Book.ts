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
        key: 'title',
        label: '',
        content: () => null,
        button: {
            label: 'Edit',
            action: (book: Book) => console.log(`Now opening popup with bookID of: ${book.bookID}`)
        },
        isButton: true
    }
] as const;
