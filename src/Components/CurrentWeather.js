import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          {console.log(data.city)}
          <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img
          alt="Weather"
          className="weatherIcon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp) + "°C"}</p>
        <div className="details">
          <span className="parameter-label-top">Details</span>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like) + "°C"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">
              {Math.round(data.wind.speed) + " kts"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{data.main.humidity + " %"}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">
              {data.main.pressure + " mb"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
