import React, { useState } from 'react';
import CalenderHeader from './CalenderHeader';
import CalenderBody from './CalenderBody';

function App() {
  const [isCalender, setIsCalender] = useState<boolean>(false);

  const [currentMonth, setCurrentMonth] = useState<number>(() =>
    new Date().getMonth()
  );

  const [currentYear, setCurrentYear] = useState<number>(() =>
    new Date().getFullYear()
  );

  const [currentDate, setCurrentDate] = useState<number>(() =>
    new Date().getDate()
  );

  const [buttonText, setButtonText] = useState<string>('Choose a date');

  function changePrevMonth() {
    const month = currentMonth;
    const year = currentYear;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(year - 1);
    } else {
      setCurrentMonth(month - 1);
    }
    setCurrentDate(-1);
  }

  function changeNextMonth() {
    const month = currentMonth;
    const year = currentYear;
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(year + 1);
    } else {
      setCurrentMonth(month + 1);
    }
    setCurrentDate(-1);
  }

  function changeDate(
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) {
    const element = event.target as HTMLElement;
    const value = Number.parseInt(element.innerHTML);
    if (value) {
      setCurrentDate(value);
      setButtonText(value + '/' + (currentMonth + 1) + '/' + currentYear);
      setIsCalender(false);
    }
  }

  function makeYearDropDownList(): React.ReactNode {
    const arr = new Array(1000).fill(0).map((value, index) => 1900 + index);
    return (
      <select
        name="year"
        value={currentYear}
        onChange={(event) => {
          setCurrentYear(Number.parseInt(event.target.value));
          setCurrentDate(-1);
        }}
      >
        {arr.map((element) => (
          <option value={`${element}`}>{element}</option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <div className="notification title has-text-primary has-text-centered">
        Date Picker
      </div>
      <div className="choose-date">
        <button
          className="date-button"
          onClick={() => setIsCalender((isCalender) => !isCalender)}
        >
          {buttonText}
        </button>
      </div>
      {isCalender && (
        <div>
          <table>
            <CalenderHeader
              currentMonth={currentMonth}
              onPrevMonth={changePrevMonth}
              onNextMonth={changeNextMonth}
              makeYearDropDownList={makeYearDropDownList}
            />
            <CalenderBody
              currentDate={currentDate}
              currentMonth={currentMonth}
              currentYear={currentYear}
              onDateChange={changeDate}
            />
            <tfoot></tfoot>
          </table>
        </div>
      )}
      <p>
        {currentDate}/{currentMonth + 1}/{currentYear}
      </p>
    </div>
  );
}

export default App;
