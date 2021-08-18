import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
    function handleResponse (response) {
        console.log(response.data);
    }

        let apiKey="7a8129ba2efd3d56557b4a0417390b4b";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherFprecast-temp-max">
                            19°
                        </span>
                        <span className="WeatherFprecast-temp-min">
                            10°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}