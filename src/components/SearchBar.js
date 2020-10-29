import { useState } from 'react';
import { Link } from 'react-router-dom';
import key from '../weatherApiKey';
import '../styles/SearchBar.scss';

function SearchBar() {
  const [cities, setCities] = useState([]);

  async function getCities(value) {
    let returnCities = [];
    if (value.length > 0) {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=${key}&q=${value || ''}`,
      );
      returnCities = await response.json();
    }

    return returnCities;
  }

  async function updateCities({ target }) {
    const returnCities = await getCities(target.value);
    setCities(returnCities);
  }

  function clearInput() {
    const input = document.querySelector('.search-input');
    input.value = '';
    setCities([]);
  }

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          name="city"
          autoComplete="off"
          required
          onChange={updateCities}
          onClick={clearInput}
          className="search-input"
        />
        <label htmlFor="city" className="city-label">
          <span className="label-content">City</span>
        </label>
      </div>
      <div className="search-result">
        {cities.map((city) => (
          <Link
            key={city.id}
            to={{
              pathname: `/${city.id}`,
              state: {
                lat: city.lat,
                lon: city.lon,
              },
            }}
            className="city-data"
            onClick={clearInput}
          >
            <h2>{city.name.split(',')[0]}</h2>
            <h3>{city.country}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
