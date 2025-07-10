import React, { useEffect, useState } from 'react';
import type { Book } from '../types/Book';
import MainRow from './MainRow';
import SearchBar from './SearchBar';
import MainHeaderRow from './MainHeaderRow';

type BooksProps = {
    allBooks: Book[];
};

const MainTable: React.FC<BooksProps> = ({ allBooks }) => {
    const [query, setQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(allBooks);
    const [sortBy, setSortBy] = useState<keyof Book>('title');
    const [isAscending, setisAscending] = useState(true);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    useEffect(() => {
        setSelectedRow(null);
        setFilteredBooks(
            allBooks
                .filter((book) => book.title.includes(query) || book.author.includes(query) || book.isbn.includes(query) || book.edition.includes(query) || book.publisher.includes(query))
                .sort((a, b) => {
                    const fieldA = a[sortBy];
                    const fieldB = b[sortBy];
                    if (fieldA < fieldB) return isAscending ? -1 : 1;
                    if (fieldA > fieldB) return isAscending ? 1 : -1;
                    return 0;
                })
        );
    }, [query, sortBy, isAscending, allBooks]);

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery} />
            <MainHeaderRow sortBy={sortBy} setSortBy={setSortBy} isAscending={isAscending} setIsAscending={setisAscending} />
            {filteredBooks.map((book) => (
                <MainRow key={book.bookID} book={book} selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
            ))}
        </div>
    );
};

export default MainTable;
