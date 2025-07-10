import React from 'react';

type SearchBarProps = {
    query: string;
    setQuery: (q: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
    return (
        <>
            <label>
                <span>Search: </span>
                <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
        </>
    );
};

export default SearchBar;
