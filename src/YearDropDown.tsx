import { setYear } from 'date-fns';
import React from 'react';

type ListProps = {
  day: Date;
  onDateChange(day: Date): void;
};

function YearDropDownList({ day, onDateChange }: ListProps) {
  const arr = new Array(1000).fill(0).map((value, index) => 1900 + index);
  return (
    <select
      name="year"
      value={day.getFullYear()}
      onChange={(event) =>
        onDateChange(setYear(day, Number.parseInt(event.target.value)))
      }
    >
      {arr.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
  );
}

export default YearDropDownList;
