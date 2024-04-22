import React from 'react'
import './searchbar.css'

const SearchBar = ({ theme}) => {
    return(
        <div className='search-container'>
            <input
                type="text"
                className={`search-input ${theme === 'dark' ? 'dark-mode': ''}}`}
                placeholder='Search...'
            />
            <button type="button" className="search-button">
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}

export default SearchBar;