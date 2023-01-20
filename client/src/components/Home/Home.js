import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { SimpleContext } from "../SimpleContext";
import Header from "../Header/Header";
import Titles from "../Titles/Titles";
import Chapters from "../Chapters/Chapters";

const Home = () => {
  const { responseData, setResponseData } = useContext(SimpleContext);
  //const [bookResults, setBookResults] = useState([]);

  // fetch GET /get-books to get all books IDs
  // useEffect(() => {
  //   fetch("/api/get-books")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setResponseData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(`Error in Feed: ${error}`);
  //     });
  // }, []);

  return (
    responseData && (
      <Wrapper>
        <Titles />
        <Chapters />
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  //margin: 20% 3%;
`;

export default Home;
