import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import key from '../openWeatherKey';
import '../styles/WeatherPage.scss';

function WeatherPage(props) {
  useEffect(() => {
    getCurrentWeather();
  }, []);

  const {id} = useParams();

  async function getCurrentWeather() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`, { mode: 'cors'});
    console.log(response.url);
    const currentWeather = await response.json();

    console.log(currentWeather);
  }

  return (
    <div className='weather-page'>

    </div>
  )
}

export default WeatherPage;
