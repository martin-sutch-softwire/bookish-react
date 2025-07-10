import React from 'react';
import { CopyColumns, type Copy } from '../types/Copy';

type InnerHeaderRowProps = {
    sortBy: keyof Copy;
    setSortBy: (s: keyof Copy) => void;
    isAscending: boolean;
    setIsAscending: (a: boolean) => void;
};

const InnerHeaderRow: React.FC<InnerHeaderRowProps> = ({ sortBy, setSortBy, isAscending, setIsAscending }) => {
    const onHeaderClick = (key: keyof Copy) => {
        if (sortBy === key) {
            setIsAscending(!isAscending);
        } else {
            setSortBy(key);
            setIsAscending(true);
        }
    };

    return (
        <div className="inner-table-header">
            {CopyColumns.map(({ key, label, isButton }) => {
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

export default InnerHeaderRow;
