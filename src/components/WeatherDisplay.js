import React, {Fragment} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from "@mui/material";


const WeatherDisplay = ({ weatherInfo, label, setChildRequest}) => {
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
    console.log('Implement Remove!')
    setChildRequest(label);
  }

  return (
    <Fragment key={label}>
      <Box
        sx={{
          width: 410,
          height: 130,
          backgroundColor: "#f3e5f5",
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
              <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 'medium' }} >{loc}</Typography>{" "}
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
              <Typography variant="subtitle1">{temp}&#8451;</Typography>{" "}
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
            <Button variant="outlined" onClick={handleClick} size="small" startIcon={<DeleteIcon />} >Remove</Button>
            </Paper>
            <Paper elevation={0}>
              
            </Paper>
            <Paper elevation={0}>
             
            </Paper>
          </Box>

        </Fragment>
      </Box>
    </Fragment>
  );
};

export default WeatherDisplay;
