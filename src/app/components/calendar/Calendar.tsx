import React from 'react';
import formatDate from '~/utils/formatDate';
import CalendarStyled from './Calendar.styled';

export interface Props {
  date: any;
}

const Calendar = ({ date }: Props) => {
  const day = formatDate(date, 'dd');
  const month = formatDate(date, 'MMM');

  return (
    <CalendarStyled>
      <span className="calendar__month">{month}</span>
      <span className="calendar__day">{day}</span>
    </CalendarStyled>
  );
};

export default Calendar;
