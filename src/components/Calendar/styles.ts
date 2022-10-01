import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const MonthContainer = styled.div`
  margin: 0px 100px 24px 100px;
`;

export const CalendarTable = styled.table`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  tr,
  tbody,
  thead {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  td,
  th {
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .weekdays {
    background: ${colors.darkRed};
  }

  .weekdays th {
    text-align: center;
    text-transform: uppercase;
    line-height: 20px;
    border: none !important;
    padding: 10px 6px;
    color: #fff;
    font-size: 13px;
  }

  td {
    min-height: 14vh;
    display: flex;
    flex-direction: column;
  }

  .event-desc {
    color: #666;
    margin: 3px 0 7px 0;
    text-decoration: none;
  }

  .other-month {
    background: #f5f5f5;
    color: #666;
  }

  .today {
    background: #e8d6d5;
  }

  /* ============================
				Mobile 
   ============================*/

  @media (max-width: 800px) {
    .weekdays,
    .other-month {
      display: none;
    }

    li {
      height: auto !important;
      border: 1px solid #ededed;
      width: 100%;
      padding: 10px;
      margin-bottom: -1px;
    }

    tr,
    tbody {
      grid-template-columns: 1fr;
    }

    tr {
      grid-column: 1 / 2;
    }

    .date {
      align-self: flex-start;
    }
  }
`;

export const DayButton = styled.button`
  height: 100%;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  display: flex;
  justify-content: center;
`;

export const ReminderButton = styled.button<{ color: string }>`
  width: 100%;
  border: none;
  cursor: pointer;

  display: flex;
  font-size: 12px;
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 5px;
  background: ${({ color }) => color};
  color: #ffff;
`;
