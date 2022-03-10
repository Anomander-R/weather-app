import React, { Fragment } from "react";
import {AppBar, Box, CssBaseline, Toolbar, AddIcon} from '.';
import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const BottomBar = ({ buttonVisible, setButtonVisible, setNewRequest }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setNewRequest("go-for-new-location");
    setButtonVisible(false);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <StyledFab
            color="secondary"
            aria-label="add"
            disabled={!buttonVisible}
            onClick={handleClick}
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default BottomBar;
