import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import '../styles/Panel.scss';

function ForecastPanel(props) {
  const [conditions, setConditions] = useState({});

  function changeConditions(units, weather) {
    if (units === 'metric') {
      return {
        avgTemp: weather.day.avgtemp_c,
        tempUnit: 'C',
        maxWind: weather.day.maxwind_kph,
        windUnit: 'kph',
        totalPrecipitation: weather.day.totalprecip_mm,
        precipitationUnit: 'mm',
        avgHumidity: weather.day.avghumidity,
        humidityUnit: '%',
      };
    }
    if (units === 'imperial') {
      return {
        avgTemp: weather.day.avgtemp_f,
        tempUnit: 'F',
        maxWind: weather.day.maxwind_mph,
        windUnit: 'mph',
        totalPrecipitation: weather.day.totalprecip_in,
        precipitationUnit: 'in',
        avgHumidity: weather.day.avghumidity,
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
      <div className="panel forecast" onClick={() => props.changeDay(props.weather.date)}>
        <h2 className="description">{format(new Date(props.weather.date), 'do MMMM')}</h2>
        <span className="column-wrapper">
          <img src={props.weather.day.condition.icon} alt="" />
          <p className="condition">{props.weather.day.condition.text}</p>
        </span>
        <span className="row-wrapper">
          <p>{'average temperature: '}</p>
          <p>
            {conditions.avgTemp}
            <span>&#176;</span>
            {conditions.tempUnit}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'max wind speed: '}</p>
          <p>
            {conditions.maxWind}
            {' '}
            {conditions.windUnit}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'total precipitation: '}</p>
          <p>
            {conditions.totalPrecipitation}
            {' '}
            {conditions.precipitationUnit}
          </p>
        </span>
        <span className="row-wrapper">
          <p>{'average humidity: '}</p>
          <p>
            {conditions.avgHumidity}
            {conditions.humidity}
          </p>
        </span>
      </div>
    </div>
  );
}

export default ForecastPanel;
