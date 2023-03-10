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
  //max-width: 42rem;
  width: 100%;
  //min-height: 100vh;
  margin: auto;
  /* padding: 2.625rem 1.3125rem; */
  flex: 0 1 0;
`;

export default Home;
