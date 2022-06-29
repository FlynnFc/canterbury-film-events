import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';

import TimeAndDatePicker from '@/components/TimeAndDatePicker';

const Eventid = () => {
  return (
    <div>
      {' '}
      hi
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimeAndDatePicker></TimeAndDatePicker>
      </LocalizationProvider>
    </div>
  );
};

export default Eventid;
