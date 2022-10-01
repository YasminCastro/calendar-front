import {
  HeaderWrapper,
  HeaderContainer,
  TodayButton,
  ArrowButton,
} from "./styles";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>Calendar</h1>

        <TodayButton>Today</TodayButton>

        <ArrowButton>
          <MdOutlineArrowBackIos />
        </ArrowButton>

        <ArrowButton>
          <MdOutlineArrowForwardIos />
        </ArrowButton>

        <h2>Mês</h2>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
