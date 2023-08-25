import React, { useEffect, useState }  from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState([]);

    useEffect(() => {
      fetchForecast();
    }, [props])

    function fetchForecast() {
        let apiKey = "202e46o709dd7b61a1effa0ftf78e03d";
        let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrlForecast).then(handleResponse);
      }

    function handleResponse(response) {
        setForecast(response.data.daily)
        setReady(true);
      }

      if (ready) {
        return (
            <div className="WeatherForecast">
              <div className="row mt-3">
                {forecast.map(function (dailyForecast, index) {
                  if (index > 0 && index < 7) {
                    return (
                      <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          );
      } else {
        return <div>Loading</div>
      }
}
