/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react';

export const Search = (props) => {
  const { getSearchTask, getSearchList, term } = props;
  const [search, setSearch] = useState('');

  const handleSearchValue = (e) => {
    const valueSearch = e.target.value;
    setSearch(valueSearch);
  };

  useEffect(() => {
    getSearchTask(search);
    getSearchList(term);
  }, [getSearchList, getSearchTask, search, term]);
  return (
    <div>
      <input
        className='search'
        type='text'
        placeholder='search'
        name='search'
        value={search}
        onChange={handleSearchValue}
      />
    </div>
  );
};
