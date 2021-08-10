import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather (props) {
    const [weatherData, setWeatherData]= useState({ready:false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt*1000),
            iconUrl: "http://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg",
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
        })
    }
    
    if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                   <FormattedDate date={weatherData.date}/>
                </li>
                <li className="text-capitalize">
                   {weatherData.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                            <img src={weatherData.iconUrl} alt={weatherData.description}/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(weatherData.wind)} km/h
                        </li>
                    </ul>
                </div>
            </div>
           
        </div> 
    );} else {
        const apiKey="7a8129ba2efd3d56557b4a0417390b4b";
        let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
    }
}