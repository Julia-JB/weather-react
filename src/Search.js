import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./Search.css";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";
import DefaultCities from "./DefaultCities";

export default function Search(props) {

  const [city, setCity] = useState(props.defaultCity);
  const [time, setTime] = useState("");
  const [weatherData, setWeatherData] = useState({ready: false});


  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      cityToDisplay: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      ready: true
    })
  }

  function fetchWeather(city) {
    let apiKey = "202e46o709dd7b61a1effa0ftf78e03d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse); 
  }

  function fetchLocalTime(city) {
    let apiKeyTime = "d993c440dd5041a1a3406e12cffe66d2";
    let timeUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKeyTime}&location=${city}`;
    axios.get(timeUrl).then((response) => {
      setTime(response.data.date_time_txt);
    });
  }

  function handleClick(event) {
    event.preventDefault();
    fetchWeather(city);
    fetchLocalTime(city);
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleClickDefault(event, cityName) {
    event.preventDefault();
    setCity(cityName);
    fetchWeather(cityName);
    fetchLocalTime(cityName);
  };

  if (weatherData.ready) {
  return (
    <div className="Search">
      <form action="" id="search-form" className="input-group mb-3">
        <input
          type="search"
          placeholder="City"
          className="form-control shadow-none"
          id="city-input"
          onChange={handleChange}
        />
        <button className="btn btn-style" type="submit" onClick={handleClick}>
          Go
        </button>
      </form>
      <DefaultCities
            city1="Kyiv"
            city2="Seattle"
            city3="Podgorica"
            city4="Anchorage"
            handleCityClick={handleClickDefault}
      />
      <CurrentWeather
        temperature={weatherData.temperature}
        icon={weatherData.icon}
        feelsLike={weatherData.feelsLike}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
      />
      <Description city={weatherData.cityToDisplay} country={weatherData.country} description={weatherData.description} time={time} />
    </div>
  );
} else {
  fetchWeather(city);
  fetchLocalTime(city);
  return (
    <div>
      <p>
       Loading...
      </p>
      </div>
    
  )
}
}
