import React, {Fragment} from 'react';
import {LoadingIndicator, WeatherDisplay} from '.';

const WeatherCard = ({weatherInfo, setChildRequest, loading, label}) => {


  return (
    <Fragment>
      {loading 
      ? <LoadingIndicator/>
    : 
      <WeatherDisplay 
        weatherInfo={weatherInfo} 
        key={weatherInfo.id} 
        label={label}
        setChildRequest={setChildRequest}/>
      }
      </Fragment>
  )
}

export default WeatherCard