import React, {Fragment} from 'react'
import {CircularProgress, Box, Grid} from '.';

const LoadingIndicator = () => {
  return (
    <Fragment>
        <Box sx={{ 
                    display: 'flex',
                    width: 350,
                    height: 130,
                    m: 3
                }}>
            <Grid container direction="column" alignItems="center" justify="center">
            <CircularProgress />
            </Grid>
        </Box>
  </Fragment>
  )
}

export default LoadingIndicator