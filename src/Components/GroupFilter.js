import React, { useState } from 'react';

const GroupFilter = ({ groups, setFilteredGroups }) => {
  const [filterValue, setFilterValue] = useState('');


  const filterGroups = (value) => {
    const filtered = groups.filter((group) =>
      group.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGroups(filtered);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    filterGroups(e.target.value);
  };

  return (
    <div className='filter_bar'>
      <input
        type='text'
        value={filterValue}
        onChange={handleFilterChange}
        placeholder='Filter by title...'
      />
    </div>
  );
};

export default GroupFilter;