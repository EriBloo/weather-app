import { useState } from 'react';
import { Link } from 'react-router-dom';
import isoCountries from '../isoCountries';
import '../styles/SearchBar.scss';

function SearchBar() {
  const cityData = require('../city.list.min.json');
  const [cities, setCities] = useState([]);

  function getCities(value) {
    const cities = [];
    if (value.length > 2) {
      cityData.forEach((city) => {
        if (city.name.toLowerCase().includes(value.toLowerCase())) {
          cities.push(city);
        }
      });
    }
    return cities;
  }

  function updateCities({target}) {
    const cities = getCities(target.value);
    const citiesSorted = cities.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
    setCities(citiesSorted);
  }

  function clearInput() {
    const input = document.querySelector('.search-input');
    input.value = '';
    setCities([]);
  }

  return (
    <div className='search'>
      <div className='search-bar'>
        <input type="text" name='city' autoComplete='off' required onChange={updateCities} onClick={clearInput} className='search-input' />
        <label htmlFor="city" className='city-label'>
          <span className="label-content">City</span>
        </label>
      </div>
      <div className="search-result">
        {cities.map((city) => (
          <Link key={city.id} to={`/${city.id}`} className='city-data' onClick={clearInput}>
            <h2>{city.name}</h2>
            <h3>{isoCountries[city.country]}{city.state ? ` (${city.state})` : ''}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchBar;
