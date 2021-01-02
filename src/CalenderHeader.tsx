import { addMonths, subMonths } from 'date-fns';
import React from 'react';
import { getMonthName } from './helper';
import YearDropDownList from './YearDropDown';

type CalenderHeaderProps = {
  day: Date;
  onDateChange(day: Date): void;
};

function CalenderHeader({ day, onDateChange }: CalenderHeaderProps) {
  return (
    <thead>
      <tr>
        <td>
          <button onClick={() => onDateChange(subMonths(day, 1))}>Prev</button>
        </td>
        <td colSpan={3}>{getMonthName(day.getMonth())}</td>
        <td colSpan={2}>
          <YearDropDownList day={day} onDateChange={onDateChange} />
        </td>
        <td>
          <button onClick={() => onDateChange(addMonths(day, 1))}>Next</button>
        </td>
      </tr>
    </thead>
  );
}
export default CalenderHeader;
