import { useState, useEffect } from 'react';
import CurrentPanel from './CurrentPanel';
import SmallPanel from './SmallPanel';
import ChartPanel from './ChartPanel';
import key from '../weatherApiKey';
import '../styles/WeatherPage.scss';

function WeatherPage(props) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const city = props.location.state.name;

  async function getWeather() {
    // get data from API
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${props.location.state.lat},${props.location.state.lon}&days=3`,
      { mode: 'cors' },
    );
    const data = await response.json();

    console.log(data);
    return data;
  }

  async function updateWeather() {
    // set data to variables
    const weather = await getWeather();
    setCurrent(weather.current);
    setForecast(weather.forecast.forecastday);
  }

  useEffect(() => {
    // update weather if we change path (in this case id of city)
    updateWeather();
  }, [props.location.pathname]);

  if (!current || !forecast || !city) {
    // if data is not yet present render nothing (otherwise it would throw error in children render)
    return null;
  }
  return (
    <div className="weather-wrapper">
      <div className="weather-page">
        <CurrentPanel weather={current} city={city} />
        <ChartPanel weather={forecast[0].hour} />
        <SmallPanel weather={forecast[0]} />
        <SmallPanel weather={forecast[1]} />
        <SmallPanel weather={forecast[2]} />
      </div>
    </div>
  );
}

export default WeatherPage;
