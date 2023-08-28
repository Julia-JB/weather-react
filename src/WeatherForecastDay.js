import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
       let temperature = Math.round(props.data.temperature.maximum);
       return `${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`;
     }

     function date() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
     }

    return (
    <div className="col">
        <div className="weather-forecast-date">{date()}</div>
        <img  className="weather-forecast-img" src={props.data.condition.icon_url} alt=""/>
        <div className="weather-forecast-temperatures">
        <span className="weather-forecast-maximum">{maxTemperature()}°</span>
        <span className="weather-forecast-minimum">{minTemperature()}°</span>
        </div>
    </div>
    )
}