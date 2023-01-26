import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h3>Simple Note</h3>
      </Link>
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
  padding: 0 0 0 3%;
  font-weight: 400;
`;

export default Header;
