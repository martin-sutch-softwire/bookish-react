import React from 'react';
import { CopyColumns, type Copy } from '../types/Copy';

type InnerRowProps = {
    copy: Copy;
};

const InnerRow: React.FC<InnerRowProps> = ({ copy }) => {
    return (
        <>
            <div className="table">
                {CopyColumns.map((column) => (
                    <span key={column.key}>{column.content(copy)}</span>
                ))}
            </div>
        </>
    );
};

export default InnerRow;
