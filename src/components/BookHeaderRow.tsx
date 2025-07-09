import React from 'react';
import { BookColumns, type Book } from '../types/Book';

type BookHeaderRowProps = {
    sortBy: string;
    setSortBy: (s: keyof Book) => void;
    isAscending: boolean;
    setIsAscending: (a: boolean) => void;
};

const BookHeaderRow: React.FC<BookHeaderRowProps> = ({ sortBy, setSortBy, isAscending, setIsAscending }) => {
    const onHeaderClick = (key: keyof Book) => {
        if (sortBy === key) {
            setIsAscending(!isAscending);
        } else {
            setSortBy(key);
            setIsAscending(true);
        }
    };

    return (
        <div className="table-header">
            {BookColumns.map(({ key, label }) => {
                const isSelected = sortBy === key;
                const defaultArrow = '▼';
                const arrow = isAscending ? '▲' : '▼';
                const arrowColour = isSelected ? 'black' : 'gray';
                return (
                    <span key={key} onClick={() => onHeaderClick(key)} style={{ userSelect: 'none', cursor: 'pointer' }}>
                        {label}
                        <span style={{ color: arrowColour }}>{isSelected ? arrow : defaultArrow}</span>
                    </span>
                );
            })}
        </div>
    );
};

export default BookHeaderRow;
