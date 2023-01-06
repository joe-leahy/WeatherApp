import React, {useState} from 'react';
import axios from 'axios';
import Search from './Components/Search';
import CurrentWeather from './Components/CurrentWeather';
import {WEATHER_API_KEY, WEATHER_API_URL} from './api'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleonSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?id=524901&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});

      console.log(currentWeather)

    }).catch((err) => console.log(err))

  }

  return (
    <div className="App">
      <Search onSearchChange={handleonSearchChange}/>
      { currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
