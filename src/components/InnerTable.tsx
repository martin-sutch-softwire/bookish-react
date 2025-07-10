import React, { useEffect, useState } from 'react';
import type { Copy } from '../types/Copy';
import InnerRow from './InnerRow';
import InnerHeaderRow from './InnerHeaderRow';
import type { Book } from '../types/Book';

type InnerTableProps = {
    book: Book;
    copies: Copy[];
};

const InnerTable: React.FC<InnerTableProps> = ({ copies, book }) => {
    const [sortedCopies, setSortedCopies] = useState(copies);
    const [sortBy, setSortBy] = useState<keyof Copy>('copyID');
    const [isAscending, setisAscending] = useState(true);

    useEffect(() => {
        setSortedCopies(
            copies.sort((a, b) => {
                const fieldA = a[sortBy];
                const fieldB = b[sortBy];
                if (fieldA < fieldB) return isAscending ? -1 : 1;
                if (fieldA > fieldB) return isAscending ? 1 : -1;
                return 0;
            })
        );
    }, [sortBy, isAscending, copies]);

    return (
        <div>
            <InnerHeaderRow sortBy={sortBy} setSortBy={setSortBy} isAscending={isAscending} setIsAscending={setisAscending} />
            {sortedCopies.map((copy) => (
                <InnerRow key={copy.copyID} copy={copy} book={book} />
            ))}
        </div>
    );
};

export default InnerTable;
