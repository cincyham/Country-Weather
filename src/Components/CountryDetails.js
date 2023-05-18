import {
  useFetchCountryQuery,
  useGetWeatherQuery,
  useFetchCountryInfoQuery,
} from "../store";
import "../Css/CountryDetails.css";
import { useState } from "react";

function CountryDetails() {
  const [showWeather, setShowWeather] = useState(false);
  const {
    data: countryNameAndLatlng,
    countryNameAndLatlngError,
    isFetchingNameAndLatlng,
  } = useFetchCountryInfoQuery();

  const {
    data: country,
    countryError,
    isFetchingCountry,
  } = useFetchCountryQuery(countryNameAndLatlng?.name);
  const {
    data: weather,
    weatherError,
    isFetchingWeather,
  } = useGetWeatherQuery(countryNameAndLatlng?.latlng);

  let countryInfo;
  let weatherInfo;

  if (weather) {
    const weatherData = weather.data.values;
    weatherInfo = (
      <div id="weather-div">
        <div id="weather-items">
          <h3 id="temperature" className="title weather-item">
            Temperature: {weatherData.temperature}°C
          </h3>
          <h3 id="humidity" className="title weather-item">
            Humidity: {weatherData.humidity}
          </h3>
          <h3 id="temperature-apparent" className="title weather-item">
            Apparent Temperature: {weatherData.temperatureApparent}
          </h3>
          <h3 id="uv-undex" className="title weather-item">
            UV Index: {weatherData.uvIndex}
          </h3>
          <h3 id="visibility" className="title weather-item">
            Visibility:{weatherData.visibility}
          </h3>
          <h3 id="wind-speed" className="title weather-item">
            Wind Speed: {weatherData.windSpeed}
          </h3>
          <h3 id="wind-direction" className="title weather-item">
            Wind Direction: {weatherData.windDirection}
          </h3>
          <h3 id="precipitation-probability" className="title weather-item">
            Chance of Rain: {weatherData.precipitationProbability}%
          </h3>
        </div>
      </div>
    );
  }

  if (country) {
    const countryDetails = country[0];
    console.log(countryDetails.latlng);
    countryInfo = (
      <div id="content">
        <h1 id="country-details-title" className="title">
          Country Information
        </h1>
        <div id="country-weather">
          <div id="detail-div">
            <h1 id="name" className="title">
              {countryDetails.name.common}
            </h1>
            <div id="items-div">
              <h3 id="capital" className="title detail-item">
                Capital: {countryDetails.capital}
              </h3>
              <h3 id="continents" className="title detail-item">
                Continents: {countryDetails.continents.join(" ")}
              </h3>
              <h3 id="latlng" className="title detail-item">
                Lat & Lng: {countryDetails.latlng.join(", ")}
              </h3>
              <h3 id="population" className="title detail-item">
                Population: {countryDetails.population.toLocaleString("en-US")}
              </h3>
              <h3 id="google-maps" className="title detail-item">
                <a href={countryDetails.maps.googleMaps}>Google Maps</a>
              </h3>
              <h3 id="car-side" className="title detail-item">
                Side of the Road: {countryDetails.car.side}
              </h3>
              <h3 id="week-start" className="title detail-item">
                Start of Week: {countryDetails.startOfWeek}
              </h3>
            </div>
          </div>
          {showWeather && weatherInfo}
        </div>
        <h3
          id="show-weather-text"
          className="title"
          onClick={() => setShowWeather(!showWeather)}
        >
          Show Weather
        </h3>
      </div>
    );
  } else {
    countryInfo = <div>Something went wrong!</div>;
  }
  return <div id="country-details">{countryInfo}</div>;
}

export default CountryDetails;
