import React, { Fragment} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/images/logo512.png";

const TopBar = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", top: 0 }}>
        <Toolbar>
          <div style={{ marginRight: "20px" }}>
            <img
              src={Logo}
              width="30px"
              alt="Weather App"
              title="Weather App"
            />
          </div>
          <Typography variant="h5"> Weather </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default TopBar;
