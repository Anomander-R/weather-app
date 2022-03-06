import React, {Fragment} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const WeatherCard = ({ weatherInfo }) => {
  const {
    loc,
    temp,
    skyDescription,
    skyIcon,
    windSpeed,
    windDirection,
    country,
  } = weatherInfo;


  const handleClick=(e)=>{
    e.preventDefault();
    // Remove this element from an array of elements
  }

  return (
    <Fragment>
      <Box
        sx={{
          width: 410,
          height: 130,
          backgroundColor: "#f3e5f5",
          "&:hover": {
            backgroundColor: "#f3e5f5",
            opacity: [0.9, 0.8, 0.7],
          },
          marginBottom: 2
        }}
      >
        <Fragment>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 0.5,
                width: 128,
                height: 32,
                background: "#f3e5f5",
                color: "#000000",
              },
            }}
          >
            <Paper elevation={0}>
              <Typography variant="subtitle1">{loc}</Typography>{" "}
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subtitle1"></Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subtitle1">
                <ReactCountryFlag
                  countryCode={`${country}`}
                  svg
                  style={{
                    width: "24px",
                    height: "32px",
                    alignContent: "top",
                  }}
                />
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 0.5,
                width: 128,
                height: 32,
                background: "#f3e5f5",
                color: "#000000",
              },
            }}
          >
            <Paper elevation={0}>
              <Typography variant="subtitle1">{temp} &#8451;</Typography>{" "}
            </Paper>
            <Paper elevation={0}>
              <img
                src={`${skyIcon}`}
                width="32px"
                alt={skyDescription}
                title={skyDescription}
                loading="lazy"
              />
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subtitle1">{windSpeed} m/s</Typography>
            </Paper>
          </Box>
          <Button variant="outlined" onClick={handleClick} size="small" startIcon={<DeleteIcon />} >Remove</Button>
        </Fragment>
      </Box>
    </Fragment>
  );
};

export default WeatherCard;
