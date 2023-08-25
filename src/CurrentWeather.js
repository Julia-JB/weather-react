import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [isCelsius, setIsCelsius] = useState(false);
  const [temperature, setTemperature] = useState(props.temperature);

  useEffect(() => {
    setIsCelsius(false);
    setTemperature(Math.round(props.temperature));
  }, [props.temperature]);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
    setIsCelsius(true);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature));
    setIsCelsius(false);
  }

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-sm-9">
          <div className="d-flex align-items-center">
            <img id="weather-icon" src={props.icon} alt="weather icon" />
            <div className="d-inline-flex weather-temperature">
              <strong id="temperature">{temperature}</strong>
              <span className="units">
                <a href="/" id="celsiusLink" onClick={showCelsius} className={!isCelsius ? 'active' : ''}>
                  °C{" "}
                </a>
                |
                <a href="/" id="fahrenheitLink" onClick={showFahrenheit} className={isCelsius ? 'active' : ''}>
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mt-md-3">
          <ul className="conditions">
            <li>
              Feels like: <span id="feelsLike">{props.feelsLike}</span>°
            </li>
            <li>
              Humidity: <span id="humidity">{props.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.wind} m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
