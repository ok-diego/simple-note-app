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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 2.625rem;
`;
const NavLinkLogo = styled(NavLink)`
  color: var(--color-foreground-header);
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;

export default Header;
