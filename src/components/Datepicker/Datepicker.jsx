import { useState } from 'react';
import Calendar from '../../models/Calendar';
import {
  Card,
  ChevronButton,
  CurrentYears,
  DaysGrid,
  DropdownButton,
  DropdownContainer,
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

export default function Datepicker() {
  const [calendar, setCalendar] = useState(new Calendar());
  const [showYears, setShowYears] = useState(false)

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
            {showYears ? <DropdownShow /> : <DropdownHide />}
          </DropdownButton>
          <YearsDropdown years={calendar.getYearsList()} />
        </YearContainer >
      </NavContainer>
      <DaysGrid>
        {calendar.weekDays.map(day => (
          <WeekDay>{day}</WeekDay>
        ))}
      </DaysGrid>
      <Line />
      <DaysGrid>
        {calendar.getMonthDaysGrid().map(item => (
          <MonthDay isCurrentMonth={item.isCurrentMonth}>{item.day.date}</MonthDay>
        ))}
      </DaysGrid>
    </Card>
  );
}
