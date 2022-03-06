import React, {useState, useEffect} from 'react'
import axios from "axios";
const WEATHER_API_KEY = "331a60b911fd32f8ab56674a027f967b";
const WEATHER_API_NAME = "Project17WeatherApp";

const [cityName, setCityName] = useState(Sarajevo);
const [limit, setLimit] = useState(5);

// Geocoding
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// Weather
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}


export default axios.create({
  baseURL: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${WEATHER_API_KEY}`,
  params: {
    part: "snippet",
    maxResults: 5,
    key: WEATHER_API_KEY,
  },
  headers: {},
});






const [input, setInput] = useState([])

const apiService = () => {
  return (
    <div>apiService</div>
  )
}

export default apiService