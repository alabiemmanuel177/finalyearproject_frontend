import * as React from 'react';
// import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "../css/calendar.css"

export default function Calendar() {

  return (
    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          // openTo="year"
          // value={value}
          // onChange={(newValue) => {
          //   setValue(newValue);
          // }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

  );
}