import {
  useFetchCountriesQuery,
  useUpdateCountryNameMutation,
  useUpdateCountryLatlngMutation
} from "../store";
import { useEffect, useState } from "react";
import "../Css/Home.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home() {
  const { data, error, isFetching } = useFetchCountriesQuery();
  const [updateName, updatePhotoResults] = useUpdateCountryNameMutation();
  const [updateLatlng, updateLatlngResults] = useUpdateCountryLatlngMutation();
  const [countries, setCountries] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectionValue, setSelectionValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      setCountries(
        data.map((country) => {
          if (
            country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) &&
            checkContinent(country.continents)
          ) {
            return (
              <Link className="link" to="/country-details">
                <div
                  key={country.name.official}
                  onClick={() => onClick(country)}
                  className="info-element info-div"
                >
                  <h3 id="country-name" className="title">
                    {country.name.common}
                  </h3>
                  <p className="info-element" id="population">
                    Population: {country.population.toLocaleString("en-US")}
                  </p>
                  <div id="area-link" className="info-element">
                    <p className="info-element" id="area">
                      Area: {country.area.toLocaleString("en-US")}
                    </p>
                    <a
                      className="info-element"
                      href={country.maps.googleMaps}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Google Maps
                    </a>
                  </div>
                </div>
              </Link>
            );
          }
        })
      );
    }
  }, [isFetching, searchTerm, selectionValue]);

  const searchbarChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSelection = (event) => {
    setSelectionValue(event.target.value);
  };

  const checkContinent = (continents) => {
    const newArr = continents.filter((continent) => {
      return continent.toLowerCase().includes(selectionValue);
    });
    if (newArr.length >= 1) {
      return true;
    }
    return false;
  };

  const onClick = (country) => {
    updateName(country.name.common);
    updateLatlng(country.latlng);
  };

  return (
    <div id="home">
      <div id="filters">
        <div id="searchbar">
          <label htmlFor="countries-input">Search Countries: </label>
          <input
            id="countries-input"
            value={searchTerm}
            onChange={searchbarChange}
          />
        </div>
        <div id="continent-selection-div">
          <label htmlFor="continent-selection">Continent: </label>
          <select
            name="continent-list"
            id="continent-selection"
            onChange={onSelection}
          >
            <option value=""></option>
            <option value="north america">North America</option>
            <option value="south america">South America</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="australia">Australia</option>
          </select>
        </div>
      </div>
      <div id="countries-div">{countries}</div>
    </div>
  );
}

export default Home;
