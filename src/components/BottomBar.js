import React, {Fragment, useState} from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const BottomBar = ({inputVisible, setInputVisible}) => {



    const handleClick =(e)=>{
        e.preventDefault();
        setInputVisible(true);
    }

  return (
    <Fragment>
    <CssBaseline />
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>

         <StyledFab color="secondary" aria-label="add" disabled={inputVisible} onClick={handleClick}>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />

        </Toolbar>
      </AppBar>





      </Fragment>
  )
}

export default BottomBar