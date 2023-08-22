import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Search from "./Search";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app mb-3">
          <Search
            defaultCity = "Lynnwood" 
            city1="Kyiv"
            city2="Seattle"
            city3="Podgorica"
            city4="Anchorage"/>
        </div>
         <p><small><a href="https://github.com/Julia-JB/weather-react" target="_blank" rel="noreferrer">Open-source code</a> by Yuliia Batsheva</small></p>
      </div>
    </div>
  );
}


