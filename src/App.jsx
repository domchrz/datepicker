import { useState } from 'react';
import styled from 'styled-components';
import Datepicker from './components/Datepicker';
import YearsDropdown from './components/YearsDropdown/YearsDropdown';
import Calendar from './models/Calendar';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, min-content);
  grid-template-rows: auto;
  gap: 0.5rem;
`;

const Day = styled.div`
  padding: 0.5rem;
  border: 1px solid black;
  width: 1rem;
  height: 1rem;
  ${({ isCurrentMonth }) =>
    !isCurrentMonth &&
    `
    background-color: lightgrey;
  `}
`;

const WeekDays = styled.div`
  padding: 0.5rem;
  border: 1px solid black;
  width: 1rem;
  height: 1rem;
  color: white;
  text-transform: capitalize;
  background-color: #333;
`;

const YearButton = styled.button`
  padding: 1rem;
`;

const YearList = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: lightgrey;
  overflow-y: scroll;
`;

function App() {
  // const [calendar, setCalendar] = useState(new Calendar(null, null));
  // const [showYears, setShowYears] = useState(false);

  // const changeYear = (year) => {
  //   setCalendar(new Calendar(year, calendar.month.number));
  //   setShowYears(false);
  // };

  return (
    <div style={{ display: 'grid', height: '100vh', placeItems: 'center'}}>
      {/* <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() =>
            setCalendar(
              new Calendar(calendar.getPreviousMonth().year, calendar.getPreviousMonth().number)
            )
          }>
          {'<'}
        </button>
        <p style={{ textTransform: 'capitalize' }}>
          {calendar.month.name}, {calendar.year}
        </p>
        <button
          onClick={() =>
            setCalendar(new Calendar(calendar.getNextMonth().year, calendar.getNextMonth().number))
          }>
          {'>'}
        </button>
        <div style={{ position: 'relative' }}>
          <YearButton onClick={() => setShowYears(!showYears)}>{calendar.year} v</YearButton>
          {showYears && (
            <YearList>
              {calendar.getYearsList().map(year => (
                <button
                  onClick={() => {
                    setCalendar(new Calendar(year, calendar.month.number));
                    setShowYears(false);
                  }}>
                  {year}
                </button>
              ))}
            </YearList>
          )}
        </div>
      </div>
      <Grid>
        {calendar.weekDays.map(day => (
          <WeekDays>{day}</WeekDays>
        ))}
        {calendar.getMonthDaysGrid().map((item, idx) => (
          <Day
            onClick={() => console.log(item.day.format('DD/MM/YYY'))}
            isCurrentMonth={item?.isCurrentMonth}
            key={idx}>
            {item?.day.date || 'x'}
          </Day>
        ))}
      </Grid>
      <YearsDropdown
        years={calendar.getYearsList()}
        currentYear={calendar.year}
        changeYear={changeYear}
      /> */}
      <Datepicker />
    </div>
  );
}

export default App;
