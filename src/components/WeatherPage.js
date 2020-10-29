import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useParams } from 'react-router-dom';
import key from '../weatherApiKey';
import '../styles/WeatherPage.scss';

function WeatherPage(props) {
  async function getCurrentWeather() {
    const response = await fetch(
      // eslint-disable-next-line react/prop-types
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${props.location.state.lat},${props.location.state.lon}`,
      { mode: 'cors' },
    );
    const currentWeather = await response.json();

    console.log(currentWeather);
  }

  useEffect(() => {
    getCurrentWeather();
  });

  return (
    <div className="weather-page">
      test
    </div>
  );
}

export default WeatherPage;
