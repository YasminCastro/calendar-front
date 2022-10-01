import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const MonthContainer = styled.div`
  margin: 0px 104px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .other-month {
    color: ${colors.grey100};
  }

  .today {
    color: blue;
  }
`;

export const DayButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
