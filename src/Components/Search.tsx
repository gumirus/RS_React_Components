import React, { useState, FormEvent } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  onSearch: (query: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(event.target.value)
        }
      />
      <button
        type="submit"
        style={{ background: 'transparent', border: 'none', outline: 'none' }}
      >
        <FaSearch style={{ color: 'yellow', fontSize: '80%' }} />
      </button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
