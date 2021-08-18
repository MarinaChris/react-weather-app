import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather (props) {
    const [weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt*1000),
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }
    
    function handleCityChange (event) {
        setCity(event.target.value);
    }

    function search (){
        const apiKey="7a8129ba2efd3d56557b4a0417390b4b";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
                <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo info={weatherData} />
            <WeatherForecast />
        </div> 
    );} else {
        search();
        return "Loading...";
    }
}