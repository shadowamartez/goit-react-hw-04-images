import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    };

    return (
        <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
            <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
                />
            <b> </b>
            <button type="submit" className="button">
            <span className="button-label">Search</span>
            </button>
        </form>
        </header>
    );
};

export default Searchbar;



