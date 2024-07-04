import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherDetails = () => {
  const { data, loading } = useContext(WeatherContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-slate-400 text-white font-bold text-2xl">
        Loading...
      </div>
    );
  }

  if (!data) {
    console.log("no data available");
    return (
      <div className="flex items-center justify-center bg-slate-400 text-white font-bold text-2xl">
        No Data Available
      </div>
    );
  }

  console.log("Data Received:", data);

  const { location, current } = data;
  const { name, region, country, localtime, tz_id } = location;
  const { temp_c, temp_f, condition, wind_mph, wind_dir, humidity, uv } =
    current;

  const { text, code } = condition;
  return (
    <div>
      <h1>Weather Details</h1>
      <p>
        <strong>Location</strong>: {name}, {region}, {country}, {tz_id},
      </p>
      <p>
        <strong>Local Time</strong>: {localtime},
      </p>
      <p>
        <strong>Temperature</strong>: {temp_c}Celcius / {temp_f}Fah,
      </p>
      <p>
        <strong>Condition</strong>: {text}, {code},
      </p>
      <p>
        <strong>Wind</strong>: {wind_mph} : {wind_dir},
      </p>
      <p>
        <strong>Humidity</strong>: {humidity}%,
      </p>
      <p>
        <strong>UV Index</strong>: {uv},
      </p>
    </div>
  );
};

export default WeatherDetails;
