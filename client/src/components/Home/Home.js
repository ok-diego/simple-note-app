import styled from "styled-components";
import React, { useContext } from "react";
import { SimpleContext } from "../SimpleContext";
import Titles from "../Titles/Titles";
import Chapters from "../Chapters/Chapters";

const Home = () => {
  const { responseData } = useContext(SimpleContext);

  return (
    responseData && (
      <Wrapper>
        <Titles />
        {/* <Chapters /> */}
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Home;
