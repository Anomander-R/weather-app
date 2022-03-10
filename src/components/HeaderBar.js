import React, { Fragment } from "react";
import {AppBar, Box, CssBaseline, Toolbar, Typography, Logo} from '.';

const HeaderBar = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
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

export default HeaderBar;
