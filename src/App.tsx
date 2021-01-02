import React, { useState } from 'react';
import DateButton from './DateButton';
import CalenderHeader from './CalenderHeader';
import CalenderBody from './CalenderBody';
import { startOfDay } from 'date-fns';

function App() {
  const [isCalender, setIsCalender] = useState<boolean>(false);
  const [isDateChosen, setIsDateChosen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(
    startOfDay(new Date())
  );

  return (
    <div>
      <div className="title">Date Picker</div>
      <DateButton
        day={selectedDate}
        isDateChosen={isDateChosen}
        isCalender={isCalender}
        onShowCalender={setIsCalender}
        onShowDate={setIsDateChosen}
      />
      {isCalender && (
        <div>
          <table>
            <CalenderHeader day={selectedDate} onDateChange={setSelectedDate} />
            <CalenderBody
              day={selectedDate}
              onDateChange={setSelectedDate}
              onShowCalender={setIsCalender}
              onShowDate={setIsDateChosen}
            />
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
