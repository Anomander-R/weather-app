import React, {useState, useEffect} from "react";
import axios from "axios";
const WEATHER_API_KEY = "331a60b911fd32f8ab56674a027f967b";


const LocationService = ({city}) => {

    const [cityName, setCityName] = useState('Sarajevo');
    const [res, setRes] = useState('');
    const limit = 5;
    const baseURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${WEATHER_API_KEY}`;
    
    useEffect(() => {
        let temp = axios.get(baseURL);
        setRes(temp);
    }, [city])
    



    console.table(res);
    return res;
}

export default LocationService