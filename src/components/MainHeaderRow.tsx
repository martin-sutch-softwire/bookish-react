import React from 'react';
import { BookColumns, type Book } from '../types/Book';

type MainHeaderRowProps = {
    sortBy: keyof Book;
    setSortBy: (s: keyof Book) => void;
    isAscending: boolean;
    setIsAscending: (a: boolean) => void;
};

const MainHeaderRow: React.FC<MainHeaderRowProps> = ({ sortBy, setSortBy, isAscending, setIsAscending }) => {
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
            {BookColumns.map(({ key, label, isButton }) => {
                const isSelected = sortBy === key;
                const defaultArrow = '▼';
                const arrow = isAscending ? '▲' : '▼';
                const arrowColour = isSelected ? 'black' : 'gray';
                return isButton ? (
                    <span key={key}></span>
                ) : (
                    <span key={key} onClick={() => onHeaderClick(key)} style={{ userSelect: 'none', cursor: 'pointer' }}>
                        {label}
                        <span style={{ color: arrowColour }}>{isSelected ? arrow : defaultArrow}</span>
                    </span>
                );
            })}
        </div>
    );
};

export default MainHeaderRow;
