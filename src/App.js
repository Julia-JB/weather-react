import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Search from "./Search";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
        <div class="weather-app mb-3">
          <Search 
           city1="Kyiv"
           city2="Seattle"
           city3="Podgorica"
           city4="Anchorage"/>
        </div>
         <p><small><a href="https://github.com/Julia-JB/weather-react">Open-source code</a> by Yuliia Batsheva</small></p>
      </div>
    </div>
  );
}


