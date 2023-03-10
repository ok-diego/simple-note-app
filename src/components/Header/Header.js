import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ThemeToggler from "../ThemeToggler";

const Header = (props) => {
  const { header } = props;

  return (
    <Wrapper>
      <NavLinkLogo to="/">
        <h2 className={`${header ? "header" : null}`}>Simple Note</h2>
      </NavLinkLogo>
      <ThemeToggler />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 42px;
  margin-bottom: 2.625rem;
  margin-left: auto;
  margin-right: auto;
  // flex grow / shrink / basis
  flex: 0 1 0;
`;
const NavLinkLogo = styled(NavLink)`
  color: var(--color-foreground-header);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;

export default Header;
