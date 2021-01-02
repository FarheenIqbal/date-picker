import React from 'react';
import { format } from 'date-fns';

type DateButtonProps = {
  day: Date;
  isDateChosen: boolean;
  isCalender: boolean;
  onShowCalender(x: boolean): void;
  onShowDate(x: boolean): void;
};

function DateButton({
  day,
  isDateChosen,
  isCalender,
  onShowCalender,
  onShowDate,
}: DateButtonProps) {
  return (
    <div className="choose-date">
      <button
        className="date-button"
        onClick={() => {
          onShowCalender(!isCalender);
          onShowDate(false);
        }}
      >
        {isDateChosen ? format(day, 'dd-MMM-yyyy') : 'choose a date'}
      </button>
    </div>
  );
}
export default DateButton;
