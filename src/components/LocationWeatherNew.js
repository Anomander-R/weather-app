import React, { Fragment, useState, useEffect } from "react";
import {LocationDialog, WeatherCard} from '.';
import axios from "axios";

const LocationWeatherNew = ({
  element,
  setChildRequest,
  label,
  setCityNameM,
  setButtonVisible,
}) => {

  //You can insert your API_KEY bellow for testing purposes
  const { REACT_APP_API_KEY } = process.env;


  const [cityName, setCityName] = useState(""); // Input from the location
  const [errorMessage, setErrorMessage] = useState("");
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [inputVisible, setInputVisible] = useState(true);
  const limit = 5;
  
  const locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${REACT_APP_API_KEY}`;
  const { lat, lon } = location;
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`;

  const countUp = () => {
    setCounter(counter + 1);
  };

  const addNewCityName = (param) => {
    if (param !== "" && param !== "go-for-new-location") {
      setCityName(param);
      countUp();
    }
  };

  const determineLocation = () => {
    setLoading(true);
    axios(locationURL)
      .then((response) => {
        //console.log(response);
        // let id = uuidv4();
        setLocation({
          id: label,
          loc: cityName,
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          countryCode: response.data[0].country,
        });
        countUp();
      })
      .catch((error) => setErrorMessage(error));
  };

  const determineWeather = () => {
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
    axios(weatherURL)
      .then((response) => {
        //console.table(response);
        const { id, loc, countryCode } = location;
        setWeatherInfo({
          id: id,
          loc: loc,
          temp: round(response.data.main.temp - 273.15, 1),
          skyDescription: response.data.weather[0].description,
          skyIcon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          windSpeed: response.data.wind.speed,
          windDirection: response.data.wind.deg,
          country: countryCode,
        });
        setLoading(false);
      })
      .catch((error) => setErrorMessage(error));

    //console.table(weatherInfo);
  };


  let condition1 = element === "go-for-new-location";
  let condition2 = !condition1;

  // first useEffect
  useEffect(() => {
    if (cityName !== "" && condition1) {
      determineLocation();
      //console.log('first useEffect inside if Statement, element is', element);
    }
    // eslint-disable-next-line
  }, [cityName]);

  // Alternate first useEffect
  useEffect(() => {
    if (cityName === "" && condition2) {
      setInputVisible(false);
      setCityName(element);
    } else if (cityName !== "" && condition2) {
      determineLocation();
    }
    // eslint-disable-next-line
  }, [cityName]);

  // second useEffect
  useEffect(() => {
    if (location !== "") {
      //console.log('second useEffect inside if Statement, element is', element);
      determineWeather();
      if (element !== cityName) {
        setCityNameM(cityName);
      }
    }
    //console.log('second useEffect outside if statement, element is', element);
    // eslint-disable-next-line
  }, [location]);

  // third useEffect
  useEffect(() => {
    if (errorMessage !== "") {
      alert('Something went wrong, please refresh your browser!');
    }
  }, [errorMessage]);


  // fourth useEffect refresh of the current location
  useEffect(() => {

    let minutes = Math.floor(Math.random() * 16) + 10;
    let delay = minutes * 60000;
    if (location !== "") {
      const timer = setTimeout(() => {
        determineWeather();
        //console.log(cityName)
        if (element !== cityName) {
          setCityNameM(cityName);
        }
      }, delay);
      return () => clearTimeout(timer);
    
    }
  }, [weatherInfo])

  return (
    <Fragment>
      <div className="flex-container-child">
        {inputVisible ? (
          <LocationDialog
            setInputVisible={setInputVisible}
            addNewCityName={addNewCityName}
            setChildRequest={setChildRequest}
            key={`c1${label}`}
          />
        ) : (
          <WeatherCard
            weatherInfo={weatherInfo}
            setChildRequest={setChildRequest}
            loading={loading}
            label={label}
            key={`b1${label}`}
          />
        )}
      </div>
    </Fragment>
  );
};

export default LocationWeatherNew;
