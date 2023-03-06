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
  width: 39.375rem;
  margin-bottom: 2.625rem;
`;
const NavLinkLogo = styled(NavLink)`
  color: var(--color-foreground);
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    //color: rgba(0, 0, 0, 0.8);
    //color: var(--color-foreground);
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;
// const Theme = styled.div``;

export default Header;
