import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Description.css";

export default function Description(props) {
  function formatTime(timeString) {
    if (timeString) {
      let day = timeString.split(", ")[0];
      let hours = timeString.split(", ")[2].slice(5, 10);
      return `${day} ${hours}`;
    } else {
      return "";
    }
  }
  return (
    <div className="Description ms-3">
      <div className="row">
        <div className="col-md-6">
          <h1 id="city" >
            {props.city}
          </h1>
          <ul>
            <li id="description">{props.description}</li>
            <li id="date">Local time: {formatTime(props.time)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
