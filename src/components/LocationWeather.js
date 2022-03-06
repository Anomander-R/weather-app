import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const LocationWeather = ({setInputVisible, addNewCityName}) => {

    const [input, setInput] = useState('');
    
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Vrijednost inputa je: ${input}`)
        addNewCityName(input);
        setInput('')
        setInputVisible(false);
        // ovdje dodati funkciju koja će ovu komponentu resetovati
        // i koja će je sakriti sa ekrana
        // i koja će proslijediti lokaciju u glavnu komponentu
    }

    const handleClick=(e)=>{
        e.preventDefault();
        setInput('')
        setInputVisible(false);
        // ovdje dodati funkciju koja će ovu komponentu resetovati
        // i koja će je sakriti sa ekrana
        // ova funkcija neće proslijediti lokaciju u glavnu komponentu
    }


  return (
    <div>Location Weather
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
            {/* Form < */}

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
            <TextField id="standard-basic" label="Enter location" variant="standard" />
            </Box>

            <Button variant="contained" onClick={handleClick} size="small" startIcon={<DeleteIcon />} >Remove</Button>
        </Box>



    </div>
  )
}

export default LocationWeather