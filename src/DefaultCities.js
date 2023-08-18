import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function DefaultCities(props) {
    return (
        <div className="DefaultCities">
            <ul className="nav justify-content-center mb-3 d-flex justify-content-around">
                <li className="nav-item">
                    <a className="nav-link" onClick={(event) => props.handleCityClick(event, props.city1)} href="#">{props.city1}</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" onClick={(event) => props.handleCityClick(event, props.city2)} href="#">{props.city2}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={(event) => props.handleCityClick(event, props.city3)} href="#">{props.city3}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={(event) => props.handleCityClick(event, props.city4)} href="#">{props.city4}</a>
                </li>
            </ul>
    </div>
    )
}