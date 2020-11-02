import { useState, useEffect } from 'react';
import '../styles/Panel.scss';

function CurrentPanel(props) {
  const [conditions, setConditions] = useState({});

  function changeConditions(units, weather) {
    if (units === 'metric') {
      return {
        temp: weather.temp_c,
        feelsLike: weather.feelslike_c,
        tempUnit: 'C',
        wind: weather.wind_kph,
        gust: weather.gust_kph,
        windUnit: 'kph',
        precipitation: weather.precip_mm,
        precipitationUnit: 'mm',
        humidity: weather.humidity,
        humidityUnit: '%',
      };
    }
    if (units === 'imperial') {
      return {
        temp: weather.temp_f,
        feelsLike: weather.feelslike_f,
        tempUnit: 'F',
        wind: weather.wind_mph,
        gust: weather.gust_mph,
        windUnit: 'mph',
        precipitation: weather.precip_in,
        precipitationUnit: 'in',
        humidity: weather.humidity,
        humidityUnit: '%',
      };
    }
    return {};
  }

  useEffect(() => {
    setConditions(changeConditions(props.units, props.weather));
  }, [props.units]);

  return (
    <div className="panel-wrapper">
      <div className="panel current">
        <h2 className="description">
          {'Current weather in '}
          {props.city}
        </h2>
        <span className="column-wrapper">
          <img src={props.weather.condition.icon} alt="" />
          <p className="condition">{props.weather.condition.text}</p>
        </span>
        <span className="row-wrapper">
          <p>{'temperature: '}</p>
          <p>
            {conditions.temp}
            <span>&#176;</span>
            {conditions.tempUnit}
            {' (feels like '}
            {conditions.feelsLike}
            <span>&#176;</span>
            {conditions.tempUnit}
            {')'}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'wind speed: '}</p>
          <p>
            {conditions.wind}
            {' '}
            {conditions.windUnit}
            {' (gusts up to '}
            {conditions.gust}
            {' '}
            {conditions.windUnit}
            {')'}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'precipitation: '}</p>
          <p>
            {conditions.precipitation}
            {' '}
            {conditions.precipitationUnit}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'humidity: '}</p>
          <p>
            {conditions.humidity}
            {'%'}
          </p>
        </span>
      </div>
    </div>
  );
}

export default CurrentPanel;
