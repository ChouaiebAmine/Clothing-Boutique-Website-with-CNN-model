import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  padding: 60px;
  text-align: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-right: 10px;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const SearchIcon = styled.i`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 18px;
  cursor: pointer;
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px); 
  left: 50%;
  transform: translateX(-50%); 
  width: ${({ searchBarWidth }) => searchBarWidth}px;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
`;

const ListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#333333')};
  }
`;

const options = [
  'T-shirt/top',
  'Trouser',
  'Dress',
  'Sandal',
  'Shirt',
  'Bag',
];

const SearchBar = ({ theme, onThemeChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const searchInputRef = useRef(null);
  const suggestionsContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchInputRef.current && suggestionsContainerRef.current) {
      const width = searchInputRef.current.offsetWidth;
      suggestionsContainerRef.current.style.width = `${width}px`;
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleSelectOption = (option) => {
    setSearchTerm(option);
    setShowSuggestions(false);
  };

  return (
    <SearchContainer theme={theme}>
      <div style={{ position: 'relative' }}>
        <SearchInput
          ref={searchInputRef}
          theme={theme}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          onFocus={() => setShowSuggestions(true)}
        />
        <FaSearch/>
        {showSuggestions && (
          <SuggestionsContainer ref={suggestionsContainerRef} theme={theme}>
            {filteredOptions.map(option => (
              <ListItem key={option} onClick={() => handleSelectOption(option)}>
                {option}
              </ListItem>
            ))}
          </SuggestionsContainer>
        )}
      </div>
    </SearchContainer>
  );
};

export default SearchBar;
