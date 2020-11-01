import { format } from 'date-fns';
import Chart from 'react-google-charts';

function TempChart(props) {
  function getTempData(data) {
    const dataToReturn = [];
    data.map((d) => dataToReturn.push([
      format(new Date(d.time), 'H:mm'),
      d.temp_c,
      d.feelslike_c,
    ]));
    return dataToReturn;
  }

  const tempData = getTempData(props.weather);

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
        vAxis: { title: 'Degrees (Celsius)' },
      }}
    />
  );
}

function RainChart(props) {
  function getRainData(data) {
    const dataToReturn = [];
    data.map((d) => dataToReturn.push([
      format(new Date(d.time), 'H:mm'),
      d.precip_mm,
      d.humidity,
    ]));
    return dataToReturn;
  }

  const rainData = getRainData(props.weather);

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
          0: { title: 'Precipitation (mm)', baseline: 0, minValue: 1 },
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
      d.wind_kph,
      d.gust_kph,
    ]));
    return dataToReturn;
  }

  const windData = getWindData(props.weather);

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
        vAxis: { title: 'Strength (kph)' },
      }}
    />
  );
}

function Charts(props) {
  switch (props.chart) {
    case 'temp':
      return <TempChart weather={props.weather} />;
    case 'rain':
      return <RainChart weather={props.weather} />;
    case 'wind':
      return <WindChart weather={props.weather} />;
    default:
      break;
  }
}

export default Charts;
