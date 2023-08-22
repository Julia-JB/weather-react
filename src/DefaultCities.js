import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function DefaultCities(props) {
    return (
        <div className="DefaultCities">
            <ul className="nav justify-content-center mb-3 d-flex justify-content-around">
                <li className="nav-item">
                    <button className="nav-link" onClick={(event) => props.handleCityClick(event, props.city1)}>{props.city1}</button>
                </li>
                 <li className="nav-item">
                    <button className="nav-link" onClick={(event) => props.handleCityClick(event, props.city2)}>{props.city2}</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={(event) => props.handleCityClick(event, props.city3)}>{props.city3}</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={(event) => props.handleCityClick(event, props.city4)}>{props.city4}</button>
                </li>
            </ul>
    </div>
    )
}