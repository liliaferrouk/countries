import React, { useState, useEffect } from 'react'
import './AllContries.css'
import search_icon from '../images/search.svg'
import FilterRegions from './FilterRegions';

const countriesList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Bruxel"
  ];

function AllContries() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countriesList);

    useEffect(() => {
        const result = countriesList.filter(country => 
        country.toLowerCase().includes(searchQuery.toLowerCase()) && 
        (filter === '' || country.startsWith(filter))
        );
        setFilteredCountries(result);
    }, [searchQuery, filter]);

  return (
    <div>
        <div className="search-filter">
            <div className="search-input-wrapper">
                <img src={search_icon} alt="search icon" />
                <input 
                    type="text" 
                    placeholder="Search for a country..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <FilterRegions filter={filter} setFilter={setFilter}/>
        </div>

        <div className="countries-list">
            {filteredCountries.map(country => (
            <div key={country}>{country}</div>
            ))}
        </div>
    </div>
  )
}

export default AllContries