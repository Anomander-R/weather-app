import React from 'react';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';

const PlusButton = () => {

    const handleClick = (e)=>{
        e.preventDefault();
        alert('You clicked');
    }

  return (
    <div> 
        
        {/* <IconButton variant="contained">+</IconButton>
    
    <DeleteIcon/> */}
    <Button variant="text" size="large" onClick={handleClick}>
    <Icon color="primary" sx={{ fontSize: 30 }}>add_circle</Icon>
    {/* <Icon color="blue" sx={{ fontSize: 30 }}>add_circle</Icon> */}
    </Button>
    </div>
  )
}

export default PlusButton