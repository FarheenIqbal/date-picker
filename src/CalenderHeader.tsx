import React from 'react';
import { getMonthName } from './helper';

type CalenderHeaderProps = {
  currentMonth: number;
  onPrevMonth(): void;
  onNextMonth(): void;
  makeYearDropDownList(): React.ReactNode;
};

function CalenderHeader({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  makeYearDropDownList,
}: CalenderHeaderProps) {
  return (
    <thead>
      <tr>
        <td>
          <button onClick={() => onPrevMonth()}>Prev</button>
        </td>
        <td colSpan={3}>{getMonthName(currentMonth)}</td>
        <td colSpan={2}>{makeYearDropDownList()}</td>
        <td>
          <button onClick={() => onNextMonth()}>Next</button>
        </td>
      </tr>
    </thead>
  );
}
export default CalenderHeader;
