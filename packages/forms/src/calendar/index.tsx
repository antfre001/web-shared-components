import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { cx, __DEV__ } from '@sk-web-gui/utils';
import * as React from 'react';
import { Input, InputProps } from '../input/input';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import dayjsLocale from 'dayjs/locale/sv';
import { useCalendarClass } from './styles';

export interface CalendarProps extends InputProps {
  /* Sets value */
  value: string;
  /* Dayjs onChange */
  onChange: (value: any) => void;
  /* Dayjs locale instance, defaults to sv */
  localeInstance?: string | object;
  /* Format of date, default "YYYY-MM-DD" */
  inputFormat?: string;
  /* Minimum date string */
  minDate?: string;
  /* Sets size: sm | md | lg */
  size?: 'sm' | 'md' | 'lg';
}

export const Calendar = React.forwardRef<HTMLSelectElement, CalendarProps>((props, ref) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    minDate = undefined,
    localeInstance = dayjsLocale,
    inputFormat = 'YYYY-MM-DD',
    size = 'md',
    ...rest
  } = props;
  const classes = useCalendarClass();
  return (
    <div className={cx(classes, className)}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={localeInstance}>
        <MobileDatePicker
          className="datepicker"
          closeOnSelect
          reduceAnimations
          showToolbar={false}
          minDate={minDate ? dayjs(minDate) : undefined}
          inputFormat={inputFormat}
          value={minDate && value <= minDate ? minDate : value}
          onChange={(value: any) => {
            if (onChange) {
              onChange(value.format(inputFormat));
            }
          }}
          componentsProps={{
            actionBar: { actions: [] },
          }}
          renderInput={({ inputRef, inputProps, InputProps }: any) => (
            <>
              <div className="datepicker-input">
                <Input ref={inputRef} {...inputProps} size={size} {...rest} />
                <CalendarTodayOutlinedIcon className="datepicker-input-icon" />
              </div>
              {InputProps?.endAdornment}
            </>
          )}
        />
      </LocalizationProvider>
    </div>
  );
});

if (__DEV__) {
  Calendar.displayName = 'Calendar';
}
