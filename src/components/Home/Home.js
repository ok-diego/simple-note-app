import styled from "styled-components";
import React, { useContext } from "react";
import { SimpleContext } from "../SimpleContext";
import Titles from "../Titles";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";

const Home = () => {
  const { responseData } = useContext(SimpleContext);

  return (
    responseData && (
      <Wrapper>
        <Header />
        <About />
        <Titles />
        {/* <Footer /> */}
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: auto;
  // flex grow / shrink / basis
  flex: 0 1 0;
`;

export default Home;
