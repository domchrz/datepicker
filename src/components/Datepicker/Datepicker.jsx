import { useState } from 'react';
import Calendar from '../../models/Calendar';
import { Card } from './styled';

export default function Datepicker() {
  const [calendar, setCalendar] = useState(new Calendar());
  const [showYears, setShowYears] = useState(false);

  const setNewCalendar = (year = null, month = null, lang = 'en') => {
    setCalendar(new Calendar(year, month, lang));
  };
  
  return <Card>Datepicker</Card>;
}
