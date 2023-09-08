import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`search-bar ${isFocused ? 'expanded' : ''}`}>
      <button className="search-bar__submit">
        <FontAwesomeIcon icon={faSearch} aria-label="submit search" className='custom-icon'/>
      </button>
      <input
        type="text"
        className={`search-bar__input ${isFocused ? 'expanded' : ''}`}
        placeholder="Search"
        aria-label="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchBar;