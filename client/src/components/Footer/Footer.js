import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h4>Simple Note 2023</h4>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #9f8fbf;
  padding: 0 0 0 3%;
  font-weight: 200;
`;

export default Footer;
