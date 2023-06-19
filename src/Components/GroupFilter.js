import React, { useState } from 'react';

const GroupFilter = ({ groups, setFilteredGroups }) => {
  const [filterValue, setFilterValue] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filterGroups = (titleValue, locationValue) => {
    const filtered = groups.filter(
      (group) =>
        group.title.toLowerCase().includes(titleValue.toLowerCase()) &&
        (locationValue === '' || group.location === locationValue)
    );
    setFilteredGroups(filtered);
  };

  const handleTitleFilterChange = (e) => {
    const titleValue = e.target.value;
    setFilterValue(titleValue);
    filterGroups(titleValue, locationFilter);
  };

  const handleLocationFilterChange = (e) => {
    const locationValue = e.target.value;
    setLocationFilter(locationValue);
    filterGroups(filterValue, locationValue);
  };

  return (
    <div className='filter_bar'>
      <input
        type='text'
        value={filterValue}
        onChange={handleTitleFilterChange}
        placeholder='Filter by title...'
      />

      <select value={locationFilter} onChange={handleLocationFilterChange}>
        <option value=''>All Locations</option>
        <option value='Manhattan'>Manhattan</option>
        <option value='Bronx'>Bronx</option>
        <option value='Queens'>Queens</option>
        <option value='Brooklyn'>Brooklyn</option>
        <option value='Staten Island'>Staten Island</option>
      </select>
    </div>
  );
};

export default GroupFilter;
