# Project 17, Phase 4 - Weather App

The Weather App is an online application for displaying current weather conditions for a specified location. 

**The API key is not submitted.** You need to add own **REACT_APP_API_KEY** in **`.env`**  file.

### Short description of the application

A user interacts with the application using a keyboard (and mouse) to enter the location for which the current weather is displayed. Users can add as many location cards as they need.

The API call is in fact two calls, first is using location name (cityName in app) to determine longitude and latitude of desired location, and second call is using retrieved data to receive weather data. App will continue to use an original search term to show current weather condition. If you type **Banja Luka** or **Banjaluka** you will get same data.   
Duplication of data is allowed; you can have any location multiple times. It is easy to implement removal of duplicate entries.  
First call yields 5 possible locations, however app is using only first one. The search for **Šip** will give you a place in Cyprus and not a place in BiH. Of course, it is possible to build a logic which will extract closest place, but application do not track current location.  
On error (first API call) clear instruction is given to the user how to remove it. It is possible to implement removal on click but it is not implemented.  
Refresh of the current location occurs every 10 to 25 minutes: fourth useEffect call – line 130 of LocationWeatherNew.js


![17weather-app](https://user-images.githubusercontent.com/90348779/157484564-a11b4b57-c83a-4c72-a936-55f03f0d965c.png)

### Application's main features

The purpose of this application is exercise in using the open API of the weather service to get the current weather information to display.

### Components

    Main,  
    HeaderBar,
    MottomBar,
    LoadingIndicator,
    LocationDialog, 
    LocationWeatherNew,
    WeatherCard
    WeatherDisplay,
    WindArrow  

### Technologies

Built With:  
    Material-UI  
    API key  
    HTML5   
    CSS  
    React JS (create-react-app)  

### Dependencies

    "@emotion/react": "^11.8.1",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.4.4",
    "@mui/material": "^5.4.4",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.26.0",
    "dotenv": "^16.0.0",
    "react": "^17.0.2",
    "react-country-flag": "^3.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "uuid": "^8.3.2"  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**