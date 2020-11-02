import { useState, useEffect } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import CurrentPanel from './CurrentPanel';
import ForecastPanel from './ForecastPanel';
import ChartPanel from './ChartPanel';
import key from '../weatherApiKey';
import '../styles/WeatherPage.scss';

function WeatherPage(props) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(0);
  const city = props.location.state.name;

  async function getWeather() {
    // get data from API
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${props.location.state.lat},${props.location.state.lon}&days=3`,
      { mode: 'cors' },
    );
    const data = await response.json();

    return data;
  }

  async function updateWeather() {
    // set data to variables
    const weather = await getWeather();
    setCurrent(weather.current);
    setForecast(weather.forecast.forecastday);
  }

  function changeDay(date) {
    const newDay = differenceInCalendarDays(new Date(date), new Date(forecast[0].date));
    setDay(newDay);
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
        <CurrentPanel weather={current} city={city} units={props.units} />
        <ChartPanel weather={forecast[day].hour} units={props.units} />
        <ForecastPanel weather={forecast[0]} changeDay={changeDay} units={props.units} />
        <ForecastPanel weather={forecast[1]} changeDay={changeDay} units={props.units} />
        <ForecastPanel weather={forecast[2]} changeDay={changeDay} units={props.units} />
      </div>
    </div>
  );
}

export default WeatherPage;
