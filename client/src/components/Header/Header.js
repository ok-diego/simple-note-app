import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ToggleSwitch from "../ToggleSwitch";

const Header = (props) => {
  const { header } = props;

  return (
    <Wrapper>
      <NavLinkLogo to="/">
        <h2 className={`${header ? "header" : null}`}>Simple Note</h2>
      </NavLinkLogo>
      <ToggleSwitch />
      {/* <Theme>React toggle</Theme> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 39.375rem;
  margin-bottom: 2.625rem;
`;
const NavLinkLogo = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;
const Theme = styled.div``;

export default Header;
