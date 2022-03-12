import React, { Fragment } from "react";
import {
  WindArrow,
  DeleteIcon,
  ReactCountryFlag,
  Typography,
  Button,
  Tooltip,
  Box,
  Paper,
} from ".";

const WeatherDisplay = ({ weatherInfo, label, setChildRequest }) => {
  const {
    loc,
    temp,
    skyDescription,
    skyIcon,
    windSpeed,
    windDirection,
    country,
  } = weatherInfo;

  const handleClick = (e) => {
    e.preventDefault();
    setChildRequest(loc);
  };

  // let myLink = `https://flagcdn.com/24x18/ba.png`;
  // if (country) {
  //   myLink = `https://flagcdn.com/24x18/${country.toLowerCase()}.png`;
  // }

  let description = "temporary";
  if (skyDescription) {
    description = skyDescription;
  }
  let cCode = "ba";
  if (country) {
    cCode = country.toLowerCase();
  }

  return (
    <Fragment key={label}>
      <Box
        sx={{
          width: 410,
          height: 130,
          backgroundColor: "#f3e5f5",
          marginBottom: 2,
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
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: "7px",
                  textTransform: "capitalize",
                  fontWeight: "medium",
                }}
              >
                {loc}
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subtitle1">
                <WindArrow windDirection={windDirection} />
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: "7px",
                }}
              >
                {/* <img
                  src={`${myLink}`}
                  width="24px"
                  alt={country}
                  loading="lazy"
                /> */}

                <ReactCountryFlag
                  countryCode={`${cCode}`}
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
              <Tooltip title={description} arrow>
                <img
                  src={`${skyIcon}`}
                  width="32px"
                  alt={description}
                  loading="lazy"
                />
              </Tooltip>
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
              <Button
                variant="outlined"
                onClick={handleClick}
                size="small"
                startIcon={<DeleteIcon />}
              >
                Remove
              </Button>
            </Paper>
            <Paper elevation={0}></Paper>
            <Paper elevation={0}></Paper>
          </Box>
        </Fragment>
      </Box>
    </Fragment>
  );
};

export default WeatherDisplay;
