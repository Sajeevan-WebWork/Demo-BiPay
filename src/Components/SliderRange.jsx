import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderSizes({ value }) {  // Destructured value prop
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="Temperature"
        defaultValue={value}
        getAriaValueText={valuetext}
        sx={{
          color: '#5c5ccf',  // Custom color
          '& .MuiSlider-thumb': {
            color: '#e4eafb',  // Thumb color
          },
          '& .MuiSlider-track': {
            color: '#5c5ccf',  // Track color
          },
          '& .MuiSlider-rail': {
            color: '#5c5ccf',  // Optional: rail color
          },
        }}
      />
    </Box>
  );
}
