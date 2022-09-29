import { useState } from 'react';
import Calendar from '../../models/Calendar';
import {
  Card,
  ChevronButton,
  DaysGrid,
  DropdownButton,
  Line,
  Month,
  MonthContainer,
  MonthDay,
  NavContainer,
  WeekDay,
  YearContainer,
} from './styled';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';
import { ReactComponent as DropdownHide } from '../../assets/dropdown-hide.svg';
import { ReactComponent as DropdownShow } from '../../assets/dropdown-show.svg';
import YearsDropdown from '../YearsDropdown/YearsDropdown';
import { useCallback } from 'react';

export default function Datepicker() {
  const [calendar, setCalendar] = useState(new Calendar());
  const [showYears, setShowYears] = useState(false);
  const [isSelected, setIsSelected] = useState(calendar.today);

  // const changeYear = (year) => {
  //   setCalendar(new Calendar(year, calendar.month.number));
  //   setShowYears(false);
  // };

  const changeYear = useCallback(
    (year) => {
      setCalendar(new Calendar(year, calendar.month.number));
      setShowYears(false);
    },
    [calendar],
  )
  

  return (
    <Card>
      <NavContainer>
        <MonthContainer>
          <ChevronButton
            onClick={() =>
              setCalendar(
                new Calendar(calendar.getPreviousMonth().year, calendar.getPreviousMonth().number)
              )
            }>
            <ChevronLeft />
          </ChevronButton>
          <Month>{calendar.month.name}</Month>
          <ChevronButton
            onClick={() =>
              setCalendar(
                new Calendar(calendar.getNextMonth().year, calendar.getNextMonth().number)
              )
            }>
            <ChevronRight />
          </ChevronButton>
        </MonthContainer>
        <YearContainer>
          {calendar.year}
          <DropdownButton onClick={() => setShowYears(prevState => !prevState)}>
            {showYears ? <DropdownHide /> : <DropdownShow />}
          </DropdownButton>
          {showYears && <YearsDropdown years={calendar.getYearsList()}         currentYear={calendar.year}
        changeYear={changeYear}/>}
        </YearContainer>
      </NavContainer>
      <DaysGrid>
        {calendar.weekDays.map(day => {
          return <WeekDay>{day}</WeekDay>;
        })}
      </DaysGrid>
      <Line />
      <DaysGrid>
        {calendar.getMonthDaysGrid().map(item => (
          <MonthDay
          onClick={() => setIsSelected(item.day)}
            isSelected={
              isSelected.format('DD/MM/YYY') === item.day.format('DD/MM/YYY') || isSelected === item.day
            }
            isCurrentMonth={item.isCurrentMonth}>
            {item.day.date}
          </MonthDay>
        ))}
      </DaysGrid>
    </Card>
  );
}
