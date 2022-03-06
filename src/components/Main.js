import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import WeatherDisplay from "./WeatherDisplay";
import LocationWeather from "./LocationWeather";
import LoadingIndicator from "./LoadingIndicator";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";


const Main = () => {

  const [cityName, setCityName] = useState(""); // Input from the location
  const [cityNameArray, setCityNameArray] = useState([]); // Input from the location
  const [location, setLocation] = useState(""); // longitute, latitude, country code
  const [locationArray, setLocationArray] = useState([]); // longitute, latitude, country code
  //-- WeatherInfo consists of cityName, temperature, skyCondition, windSpeed, windDirection, countryFlag--//
  const [weatherInfo, setWeatherInfo] = useState(""); 
  const [weatherInfoArray, setWeatherInfoArray] = useState([]); 
  const [counter, setCounter]=useState(0);
  const [inputVisible, setInputVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState([]);
  const [childRequest, setChildRequest] = useState('');


  useEffect(() => {
    if (cityName !== weatherInfo.loc && cityName !==""){
      
      const timer = setTimeout(() => {
        setLoading(true);
      }, 500);
      return () => clearTimeout(timer);


    }
  }, [cityName])

  useEffect(() => {
    if (cityName === weatherInfo.loc){ 
      setLoading(false);
    }
  }, [weatherInfo])


  const addNewCityName =(param)=>{

    if (param !==""){
    setCityName(param);
    countUp();}
  }


  const countUp = ()=>{
    setCounter(counter+1);
  }

  const limit = 5;
  const WEATHER_API_KEY = "331a60b911fd32f8ab56674a027f967b";
  const locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${WEATHER_API_KEY}`;
  
  
  // const locationURLarray = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameArray[(cityNameArray.length-1)]}&limit=${limit}&appid=${WEATHER_API_KEY}`;



  const {lat, lon} = location;
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`

  const determineLocation = () => {
    axios(locationURL)
      .then((response) => {
        console.log(response);
        // console.log(response.data[0].lat);
        // console.log(response.data[0].lon);
        let id = uuidv4();
        setLocation({ id:id, loc: cityName, lat: response.data[0].lat, lon: response.data[0].lon, countryCode: response.data[0].country });
        countUp();
      })
      .catch((error) => console.log(error));

      //console.table(lon, lat);
  };

  const updateLocationArray = ()=>{
    if (location !==""){
      const temp = [...locationArray];
      temp.push(location);
      setLocationArray(temp);
    }
  }




  const determineWeather = () =>{

    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }



    axios(weatherURL)
    .then((response) => {
      console.table(response);
      // console.log(response.data[0].lat);
      // console.log(response.data[0].lon);
      // setLocation({ lat: response.data[0].lat, lon: response.data[0].lon });
      //-- WeatherInfo consists of cityName, temperature, skyCondition, windSpeed, windDirection, countryFlag--//
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
    })
    .catch((error) => console.log(error));

    console.table(weatherInfo);
  }

  const updateWeatherArray =()=>{

    if (weatherInfo !==""){
      const temp = [...weatherInfoArray];
      temp.push(weatherInfo);
      setWeatherInfoArray(temp);
    }
  }




  useEffect(() => {
    //determineLocation();
    //determineLocationArray();
  }, [])

  useEffect(() => {
    if (cityName!==''){
    determineLocation();}
  }, [cityName])


useEffect(() => {
  if (cityName !== ''){
    let temp = [...cityNameArray];
    temp.push(cityName)
    setCityNameArray(temp);
  }
}, [cityName])

  useEffect(() => {
    updateLocationArray();
  }, [location])


  useEffect(() => {
    if (location!==''){
    determineWeather();}
  }, [location])

  useEffect(() => {
    updateWeatherArray();
    setLoading(false);
  }, [weatherInfo])

  const removeWeatherComponent = (param)=>{

    let arr = [...locationArray];
    let ordinalNumber = -10;

    console.log(ordinalNumber);
    ordinalNumber = arr.findIndex(checkIndex)
    console.log(ordinalNumber);

    function checkIndex(a){
      return (a.id===param)
    }
    

    
    let arr0 = [...components]
    arr0.splice(ordinalNumber,1);
    let arr1 = [...weatherInfoArray]
    arr1.splice(ordinalNumber,1);
    let arr2 = [...locationArray]
    arr2.splice(ordinalNumber,1);
    let arr3 = [...cityNameArray];
    arr3.splice(ordinalNumber,1);


    //console.table(arr3)

    setCityNameArray(arr3);
    setLocationArray(arr2);
    setWeatherInfoArray(arr1);
    setComponents(arr0);
    setCityName('');
    setChildRequest('');
    setLocation('');
    setWeatherInfo('');
    setLoading(false);
  }

  useEffect(() => {

    if (childRequest!==''){

      removeWeatherComponent(childRequest);
    }
  }, [childRequest])

  const fillComponents = (array)=>{
    let compArray = [];
    let arr = [...array];
    arr.forEach( element =>{
      compArray.push(<WeatherDisplay 
        weatherInfo={element} 
        key={element.id} 
        label={element.id}
        setChildRequest={setChildRequest}/>)
    })
    return compArray;
}

  useEffect(() => {
    let temp = fillComponents(weatherInfoArray)
    setComponents(temp);
    setLoading(false);
  }, [weatherInfoArray])





  return (
    <div>
      <TopBar/>
      {components}
      {inputVisible ? <LocationWeather setInputVisible={setInputVisible} addNewCityName={addNewCityName}/> : null}
      {loading && inputVisible ? <LoadingIndicator/> : null}
      <BottomBar inputVisible={inputVisible} setInputVisible={setInputVisible}/>
    </div>
  );
};

export default Main;
