import React from 'react';
import type { Column } from '../types/Column';

type MainHeaderRowProps = {
    sortBy: string;
    setSortBy: (s: string) => void;
    isAscending: boolean;
    setIsAscending: (a: boolean) => void;
    columns: Column[];
};

const MainHeaderRow: React.FC<MainHeaderRowProps> = ({ sortBy, setSortBy, isAscending, setIsAscending, columns }) => {
    const ascendingArrow = '▲';
    const descendingArrow = '▼';

    const onHeaderClick = (key: string) => {
        if (sortBy === key) {
            setIsAscending(!isAscending);
        } else {
            setSortBy(key);
            setIsAscending(true);
        }
    };

    return (
        <div className="table-header">
            {columns.map(({ key, label, isButton }) => {
                const isSelected = sortBy === key;
                const arrow = isAscending ? ascendingArrow : descendingArrow;
                const arrowColour = isSelected ? 'black' : 'gray';
                return isButton ? (
                    <span key={key}></span>
                ) : (
                    <span key={key} onClick={() => onHeaderClick(key)} style={{ userSelect: 'none', cursor: 'pointer' }}>
                        {label}
                        <span style={{ color: arrowColour }}>{isSelected ? arrow : descendingArrow}</span>
                    </span>
                );
            })}
        </div>
    );
};

export default MainHeaderRow;
