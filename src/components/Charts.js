import { format } from 'date-fns';
import Chart from 'react-google-charts';

function TempChart(props) {
  function getTempData(data) {
    const dataToReturn = [];
    data.map((d) => dataToReturn.push([
      format(new Date(d.time), 'H:mm'),
      props.units === 'metric' ? d.temp_c : d.temp_f,
      props.units === 'metric' ? d.feelslike_c : d.feelslike_f,
    ]));
    return dataToReturn;
  }

  const tempData = getTempData(props.weather);
  const unit = props.units === 'metric' ? 'Celsius' : 'Fahrenheit';

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType={'LineChart'}
      data={[['hour', 'temperature', 'percived'], ...tempData]}
      options={{
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: '#f5f6fe',
        chartArea: {
          width: '80%',
          height: '60%',
        },
        vAxis: { title: `Degrees (${unit})` },
      }}
    />
  );
}

function RainChart(props) {
  function getRainData(data) {
    const dataToReturn = [];
    data.map((d) => dataToReturn.push([
      format(new Date(d.time), 'H:mm'),
      props.units === 'metric' ? d.precip_mm : d.precip_in,
      d.humidity,
    ]));
    return dataToReturn;
  }

  const rainData = getRainData(props.weather);
  const unit = props.units === 'metric' ? 'mm' : 'in';

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType={'ComboChart'}
      data={[['hour', 'precipitation', 'humidity'], ...rainData]}
      options={{
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: '#f5f6fe',
        chartArea: {
          width: '80%',
          height: '60%',
        },
        seriesType: 'bars',
        series: {
          1: { targetAxisIndex: '1', type: 'line' },
        },
        vAxes: {
          0: { title: `Precipitation (${unit})`, baseline: 0, minValue: 1 },
          1: { title: 'Humidity (%)', baseline: 0 },
        },
        vAxis: { baseline: 0 },
      }}
    />
  );
}

function WindChart(props) {
  function getWindData(data) {
    const dataToReturn = [];
    data.map((d) => dataToReturn.push([
      format(new Date(d.time), 'H:mm'),
      props.units === 'metric' ? d.wind_kph : d.wind_mph,
      props.units === 'metric' ? d.gust_kph : d.gust_mph,
    ]));
    return dataToReturn;
  }

  const windData = getWindData(props.weather);
  const unit = props.units === 'metric' ? 'kph' : 'mph';

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType={'LineChart'}
      data={[['hour', 'wind', 'gusts'], ...windData]}
      options={{
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: '#f5f6fe',
        chartArea: {
          width: '80%',
          height: '60%',
        },
        vAxis: { title: `Strength (${unit})` },
      }}
    />
  );
}

function Charts(props) {
  switch (props.chart) {
    case 'temp':
      return <TempChart units={props.units} weather={props.weather} />;
    case 'rain':
      return <RainChart units={props.units} weather={props.weather} />;
    case 'wind':
      return <WindChart units={props.units} weather={props.weather} />;
    default:
      break;
  }
}

export default Charts;
