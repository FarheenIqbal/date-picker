import React from 'react';
import {
  startOfMonth,
  startOfWeek,
  subDays,
  addDays,
  endOfWeek,
  endOfMonth,
  isBefore,
  isSameDay,
  isAfter,
  startOfDay,
} from 'date-fns';

type CalenderBodyProps = {
  day: Date;
  onDateChange(day: Date): void;
  onShowCalender(x: boolean): void;
  onShowDate(x: boolean): void;
};

function CalenderBody({
  day,
  onDateChange,
  onShowCalender,
  onShowDate,
}: CalenderBodyProps) {
  const firstDay = startOfWeek(startOfMonth(day));
  const endDay = startOfDay(endOfWeek(endOfMonth(day), { weekStartsOn: 0 }));
  const arr: Date[][] = [];

  for (let day = subDays(firstDay, 1); isBefore(day, endDay); ) {
    arr.push(
      Array(7)
        .fill(0)
        .map(() => {
          day = addDays(day, 1);
          return day;
        })
    );
  }

  function setClassName(d: Date) {
    if (isSameDay(day, d)) {
      return 'selected-date';
    }
    if (isBefore(d, startOfMonth(day)) || isAfter(d, endOfMonth(day))) {
      return 'other-dates';
    }
    return '';
  }

  return (
    <tbody>
      <tr className="daynames">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map((dayName) => (
          <td>{dayName}</td>
        ))}
      </tr>
      {arr.map((week) => (
        <tr>
          {week.map((d) => (
            <td
              className={setClassName(d)}
              onClick={() => {
                onDateChange(d);
                onShowCalender(false);
                onShowDate(true);
              }}
            >
              {d.getDate()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default CalenderBody;
