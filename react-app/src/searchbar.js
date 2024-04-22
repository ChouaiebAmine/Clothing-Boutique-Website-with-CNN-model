import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#222222')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  padding: 150px;
  margin-top: 0; 
  text-align: center; 
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-right: 10px; 
`;

const SearchIcon = styled.i`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; 
  font-size: 18px;
`;

const SearchBar = ({ theme }) => {
  return (
    <SearchContainer theme={theme}>
      <SearchInput type="text" className={`search-input ${theme === 'dark' ? 'dark-mode' : ''}`} placeholder="Search..." />
      <SearchIcon className="fas fa-search" />
    </SearchContainer>
  );
};

export default SearchBar;