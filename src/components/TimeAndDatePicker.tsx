import TextField from '@mui/material/TextField';
import * as React from 'react';

const TimeAndDatePicker = () => {
  return (
    <>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        sx={{
          width: 300,
          color: 'rgb(226 232 240',
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};

export default TimeAndDatePicker;
