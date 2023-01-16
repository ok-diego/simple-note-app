import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { SimpleContext } from "../SimpleContext";

const Home = () => {
  const { responseData, setResponseData } = useContext(SimpleContext);

  // fetch GET /get-books to get all books IDs
  useEffect(() => {
    fetch("/api/get-books")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setResponseData(response);
      })
      .catch((error) => {
        console.log(`Error in Feed: ${error}`);
      });
  }, []);

  return <Wrapper>Hello!</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export default Home;
