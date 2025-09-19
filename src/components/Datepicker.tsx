import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import { Dayjs } from "dayjs";

const Datepicker = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} direction="row">
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          maxDate={endDate || undefined}
          slotProps={{ textField: { variant: 'outlined' } }}
        />
        <DatePicker
          className="h-10 w-40 text-[10px] p-1"
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          minDate={startDate || undefined}
          slotProps={{ textField: { variant: 'outlined' } }}
        />
      </Stack>
    </LocalizationProvider>
  )
};

export default Datepicker;
