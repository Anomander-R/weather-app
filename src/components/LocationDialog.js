import React, {useState} from 'react'
import {Box, TextField, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const LocationDialog = ({setInputVisible, addNewCityName, setChildRequest, counter}) => {

    const [input, setInput] = useState('');
    
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addNewCityName(input);
        setInput('')
        setInputVisible(false);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        setInput('')
        setInputVisible(false);
        setChildRequest('D3l3t3M3');
    }


  return (
    <div>
        <Box
        sx={{
            width: 410,
            height: 115,
            backgroundColor: 'whitesmoke',
            '&:hover': {
            backgroundColor: 'whitesmoke',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        >
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onChange={handleChange}
            onSubmit={handleSubmit}
            >
           { (counter<5) ?
            <TextField 
            id="standard-basic" 
            label="Enter location" 
            variant="standard" 
            autoFocus/>
            
                :
            <TextField 
            id="standard-basic" 
            label="Enter location" 
            variant="standard" 
            helperText="Something went wrong. Try again!"
            autoFocus/>
            
            }

        </Box>
            <Button variant="contained" onClick={handleClick} size="small" startIcon={<DeleteIcon />} >Remove</Button>
        </Box>



    </div>
  )
}

export default LocationDialog