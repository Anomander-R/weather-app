import React, {Fragment, useState, useEffect} from 'react'
import LocationDialog from './LocationDialog';
import WeatherCard from './WeatherCard';
import axios from "axios";

const LocationWeatherNew = ({element, setChildRequest, label, setCityNameM, setButtonVisible}) => {

    const [cityName, setCityName] = useState(""); // Input from the location
    const [errorMessage, setErrorMessage] = useState("");
    const [location, setLocation] = useState("");
    const [weatherInfo, setWeatherInfo] = useState("");
    const [loading, setLoading] = useState(false);
    const [counter, setCounter]=useState(0);
    const [inputVisible, setInputVisible] = useState(true);
    const limit = 5;
    const WEATHER_API_KEY = "331a60b911fd32f8ab56674a027f967b";
    const locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${WEATHER_API_KEY}`;
    const {lat, lon} = location;
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`


    const countUp = ()=>{
        setCounter(counter+1);
      }


    const addNewCityName =(param)=>{

        if (param !=="" && param !=='go-for-new-location'){
        //setCityNameM(param);
        setCityName(param);
        //setButtonVisible(true);
        countUp();
        }
      }

    const determineLocation = () => {
        setLoading(true);
        axios(locationURL)
          .then((response) => {
            console.log(response);
            // let id = uuidv4();
            setLocation({ id:label, loc: cityName, lat: response.data[0].lat, lon: response.data[0].lon, countryCode: response.data[0].country });
            countUp();
          })
          .catch((error) => setErrorMessage(error));
      };

    const determineWeather = () =>{
        
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    axios(weatherURL)
    .then((response) => {
        //console.table(response);
        const {id, loc, countryCode} = location;
        setWeatherInfo({ 
        id: id,
        loc: loc, 
        temp: round(response.data.main.temp - 273.15, 1), 
        skyDescription: response.data.weather[0].description, 
        skyIcon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`, 
        windSpeed: response.data.wind.speed, 
        windDirection: response.data.wind.deg,
        country: countryCode  });
        setLoading(false);
    })
    .catch((error) => setErrorMessage(error));

    //console.table(weatherInfo);
    }

    useEffect(() => {
        if (cityName!==''){
        determineLocation();}
        // eslint-disable-next-line
      }, [cityName])

      useEffect(() => {
        if (location!==''){
        determineWeather();
        setCityNameM(cityName)}
        // eslint-disable-next-line
      }, [location])



      useEffect(() => {
        if (errorMessage!==''){
        console.log(errorMessage);
        }
      }, [errorMessage])


  return (
    <Fragment>
      <div className="flex-container-child"> 
       {inputVisible 
        ? <LocationDialog 
            setInputVisible={setInputVisible} 
            addNewCityName={addNewCityName} 
            setChildRequest={setChildRequest}
            key={`c1${label}`}/> 
        : <WeatherCard 
            weatherInfo={weatherInfo} 
            setChildRequest={setChildRequest} 
            loading={loading} 
            label={label} 
            key={`b1${label}`}/>}
       </div>
    </Fragment>
  )
}

export default LocationWeatherNew