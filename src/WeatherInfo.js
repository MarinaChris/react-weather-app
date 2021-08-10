import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
        <h1>{props.info.city}</h1>
            <ul>
                <li>
                   <FormattedDate date={props.info.date}/>
                </li>
                <li className="text-capitalize">
                   {props.info.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                            <img src={props.info.iconUrl} alt={props.info.description}/>
                <span className="temperature">{Math.round(props.info.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {props.info.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(props.info.wind)} km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>)
}