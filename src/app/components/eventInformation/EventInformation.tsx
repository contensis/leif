import React from 'react';
import formatDate from '~/utils/formatDate';
import { EventInformationStyled } from './EventInformation.styled';

export interface Props {
  location: string;
  date: string;
}

const EventInformation = ({ location, date }: Props) => {
  if (!location || !date) return null;

  return (
    <EventInformationStyled>
      <div>
        {location && <p className="location">{location}</p>}
        {date && (
          <p className="dateTime">
            {formatDate(date, 'MMMM dd yyyy')} <span>•</span>{' '}
            {formatDate(date, 'HH:mm')}
          </p>
        )}
      </div>
    </EventInformationStyled>
  );
};

export default EventInformation;
