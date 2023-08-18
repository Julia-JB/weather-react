import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./Search.css";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";
import DefaultCities from "./DefaultCities";

export default function Search(props) {
  const DEFAULT_CITY = "Lynnwood";
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [cityToDisplay, setCityToDisplay] = useState("");
  let [feelsLike, setFeelsLike] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [time, setTime] = useState("");

  function fetchWeather(city) {
    let apiKey = "202e46o709dd7b61a1effa0ftf78e03d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setTemperature(Math.round(response.data.temperature.current));
      setFeelsLike(Math.round(response.data.temperature.feels_like));
      setHumidity(response.data.temperature.humidity);
      setWind(response.data.wind.speed);
      setDescription(response.data.condition.description);
      setIcon(response.data.condition.icon_url);
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
        setCityToDisplay(DEFAULT_CITY)
        fetchWeather(DEFAULT_CITY);
        fetchLocalTime(DEFAULT_CITY)
    })
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
    setCityToDisplay(city);
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
    setCityToDisplay(cityName);
  };

  useEffect(() => {
    const defaultCity = "Lynnwood";
    setCity(defaultCity);
    setCityToDisplay(defaultCity);
    fetchWeather(defaultCity);
    fetchLocalTime(defaultCity);
  }, []);

  return (

    <div className="Search">
        
      <form action="" id="search-form" class="input-group mb-3">
        <input
          type="search"
          placeholder="City"
          className="form-control shadow-none"
          id="city-input"
          onChange={handleChange}
        />
        <button class="btn btn-style" type="submit" onClick={handleClick}>
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
        temperature={temperature}
        icon={icon}
        feelsLike={feelsLike}
        humidity={humidity}
        wind={wind}
      />

      <Description city={cityToDisplay} description={description} time={time} />
    </div>
  );
}
