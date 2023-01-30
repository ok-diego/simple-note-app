import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <NavLinkLogo to="/">
        <h3>Simple Note</h3>
      </NavLinkLogo>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #9f8fbf;
  padding: 0 0 0 1%;
  font-weight: 400;
`;
const NavLinkLogo = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: underline;
  }
  &:link {
  }
  &:active {
  }
`;

export default Header;
