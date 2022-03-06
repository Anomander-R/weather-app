import React, {Fragment} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import { Grid } from '@mui/material';

const LoadingIndicator = () => {
  return (
    <Fragment>
        <Box sx={{ 
                    display: 'flex',
                    width: 350,
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