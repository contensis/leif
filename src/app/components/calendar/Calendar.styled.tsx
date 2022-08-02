import styled from 'styled-components';

const CalendarStyled = styled.div`
  width: 96px;
  background: #fff;
  box-shadow: 0px 0px 32px rgb(0 1 133 / 8%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .calendar__day,
  .calendar__month {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .calendar__day {
    height: 56px;
    border-radius: 0 0 4px 4px;
    color: #333333;
    margin: 0;
    font-size: 24px;
  }
  .calendar__month {
    text-transform: uppercase;
    background: #ff1f55;
    border-radius: 4px 4px 0 0;
    color: #fff;
    height: 56px;
    margin: 0;
    padding: 16px 0;
    font-size: 18px;
  }
`;

export default CalendarStyled;
