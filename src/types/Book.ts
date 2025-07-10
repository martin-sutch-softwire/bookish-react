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
