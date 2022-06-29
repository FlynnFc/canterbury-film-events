import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';

const Eventid = () => {
  return (
    <div>
      {' '}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {' '}
      </LocalizationProvider>
    </div>
  );
};

export default Eventid;
