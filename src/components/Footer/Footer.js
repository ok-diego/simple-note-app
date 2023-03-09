import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Ul>
        <Li>
          <NavLinkMenu
            as="a"
            href="https://github.com/ok-diego"
            target="_blank"
          >
            GitHub
          </NavLinkMenu>
        </Li>
        <Li>・</Li>
        <Li>
          <NavLinkMenu
            as="a"
            href="https://www.linkedin.com/in/diego-alexander-dev/"
            target="_blank"
          >
            Linkedin
          </NavLinkMenu>
        </Li>
      </Ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 0 0 0.75rem 0;
  margin-top: 2.625rem;
  font-weight: 200;
`;
const Ul = styled.ul`
  display: flex;
  padding: 0 0 0 0;
  font-weight: 300;
`;
const Li = styled.li`
  padding: 0 0 0 0;
`;
const NavLinkMenu = styled(NavLink)`
  color: var(--color-title-primary);
  text-decoration: underline;
  font-size: 0.9rem;

  &:hover {
    //color: rgba(0, 0, 0, 0.8);
    color: var(--color-title-primary);
    text-decoration: none;
  }
  &:link {
    color: var(--color-title-primary);
  }
  &:active {
    color: var(--color-title-primary);
  }
`;

export default Footer;
