import React, { useEffect, useState } from 'react';
import type { Book } from '../types/Book';
import BookRow from './BookRow';
import SearchBar from './SearchBar';

type BooksProps = {
    allBooks: Book[];
};

const MainTable: React.FC<BooksProps> = ({ allBooks }) => {
    const [query, setQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(allBooks);

    useEffect(() => {
        setFilteredBooks(allBooks.filter((book) => book.title.includes(query) || book.author.includes(query) || book.isbn.includes(query) || book.edition.includes(query) || book.publisher.includes(query)));
    }, [query]);

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery} />
            {filteredBooks.map((book) => (
                <BookRow key={book.bookID} book={book} />
            ))}
        </div>
    );
};

export default MainTable;
