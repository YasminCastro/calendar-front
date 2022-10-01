import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;

  top: 0;

  @media (max-width: 1340px) {
    padding: 0 24px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;

  padding: 8px;
  padding-left: 56px;

  display: flex;
  align-items: center;
  gap: 20px;

  border-bottom: 1px solid ${colors.grey500};

  h1 {
    font-size: 24px;
    font-weight: 300;
    color: ${colors.grey500};
  }

  h2 {
    font-size: 18px;
    font-weight: 300;
    color: ${colors.grey500};
  }

  @media (max-width: 460px) {
    padding: 4px 0px;
  }
`;

export const TodayButton = styled.button`
  margin: 0 24px;

  background: transparent;
  border: 1px solid ${colors.grey50};
  border-radius: 3px;
  padding: 10px;

  font-size: 16px;

  :hover {
    cursor: pointer;
    background: ${colors.grey50};
  }
`;

export const ArrowButton = styled.div`
  padding: 6px;
  border-radius: 50%;
  display: flex;

  :hover {
    cursor: pointer;
    background: ${colors.grey50};
  }
`;
