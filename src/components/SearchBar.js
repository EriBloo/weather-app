import { useState } from 'react';
import '../styles/SearchBar.scss';

function SearchBar() {
  const cityData = require('../city.list.min.json');
  const [cities, setCities] = useState([]);

  function getCities(value) {
    if (value.length < 3) {
      return [];
    }
    const cities = [];
    cityData.forEach((city) => {
      if (city.name.toLowerCase().includes(value.toLowerCase())) {
        cities.push(city);
      }
    })
    return cities;
  }

  function updateCities({target}) {
    const cities = getCities(target.value);
    setCities(cities);
  }

  return (
    <div className='search'>
      <input type="text" onChange={updateCities} />
      {cities.map((city) => (
        <div key={city.id}>
          <h2>{city.name}</h2>
          <h2>{city.country}</h2>
        </div>
      ))}
    </div>
  )
}

export default SearchBar;
