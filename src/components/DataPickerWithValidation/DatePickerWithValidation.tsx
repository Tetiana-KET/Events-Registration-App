import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateValidationError } from '@mui/x-date-pickers/models';
import { MIN_AGE } from '../../consts/validationConsts';
import { useMemo, useState } from 'react';

interface DatePickerWithValidationProps {
  setIsValidDate: (isValid: boolean) => void;
}

export default function DatePickerWithValidation({ setIsValidDate }: DatePickerWithValidationProps) {
  const [error, setError] = useState<DateValidationError | null>(null);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const today = dayjs();
  const minDate = today.subtract(MIN_AGE, 'year');

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'maxDate': {
        return 'You must be at least 18 years old';
      }

      case 'invalidDate': {
        return 'Your date is not valid';
      }

      default: {
        return '';
      }
    }
  }, [error]);

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    setSelectedDate(newValue);

    if (newValue) {
      if (newValue.isAfter(today)) {
        setIsValidDate(false);
      } else if (newValue.isAfter(minDate)) {
        setError('maxDate');
        setIsValidDate(false);
      } else if (!newValue.isValid()) {
        setError('invalidDate');
        setIsValidDate(false);
      } else {
        setError(null);
        setIsValidDate(true);
      }
    } else {
      setError(null);
      setIsValidDate(false);
    }
  };

  return (
    <div
      style={{ display: 'flex', maxWidth: 'fit-content', border: '2px solid var(--accent-color)', borderRadius: '5px' }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          onError={(newError) => setError(newError)}
          slotProps={{
            textField: {
              helperText: errorMessage,
            },
          }}
          maxDate={minDate}
        />
      </LocalizationProvider>
    </div>
  );
}
