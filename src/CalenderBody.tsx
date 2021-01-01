import { type } from 'os';
import React from 'react';
import { daysInMonth } from './helper';

type CalenderBodyProps = {
  currentDate: number;
  currentMonth: number;
  currentYear: number;
  onDateChange(
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ): void;
};

function makeDaysInAMonthArray(currentMonth: number, currentYear: number) {
  const arr: number[][] = [];
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let dayNum = 1;
  let i;
  const numOfDays = daysInMonth(currentMonth, currentYear);
  //first column
  arr[0] = [];
  for (i = 0; i < firstDayOfMonth; i++) arr[0].push(0);
  for (i = 1; i <= 7 - firstDayOfMonth; i++) arr[0].push(dayNum++);

  //middle columns

  for (i = 0; numOfDays - (7 * i + 1) >= 7 && dayNum <= numOfDays; i++) {
    arr[i + 1] = [];
    for (let j = 0; j < 7; j++) {
      if (dayNum <= numOfDays) arr[i + 1].push(dayNum++);
      else arr[i + 1].push(0);
    }
  }
  //last column
  let j, k;
  if (dayNum <= numOfDays) {
    arr[i + 1] = [];

    for (j = 0; dayNum <= numOfDays; j++) arr[i + 1].push(dayNum++);
    for (k = 0; k < 7 - j; k++) arr[i + 1].push(0);
  }
  return arr;
}

function CalenderBody({
  currentDate,
  currentMonth,
  currentYear,
  onDateChange,
}: CalenderBodyProps) {
  return (
    <tbody>
      <tr className="daynames">
        <td>Sun</td>
        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thur</td>
        <td>Fri</td>
        <td>Sat</td>
      </tr>
      {makeDaysInAMonthArray(currentMonth, currentYear).map((row) => (
        <tr>
          {row.map((element) =>
            element === currentDate ? (
              <td
                style={{ backgroundColor: 'blue', color: 'red' }}
                onClick={(event) => onDateChange(event)}
              >
                {element}
              </td>
            ) : element === 0 ? (
              <td></td>
            ) : (
              <td onClick={(event) => onDateChange(event)}>{element}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}
export default CalenderBody;
