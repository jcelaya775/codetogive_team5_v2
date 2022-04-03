import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function valuetext(value) {
  return `${value}°C`
}

export default function DiscreteSlider() {
  return (
    <Box>
      <Slider
        aria-label='Temperature'
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay='auto'
        step={1}
        marks
        min={1}
        max={10}
      />
    </Box>
  )
}
