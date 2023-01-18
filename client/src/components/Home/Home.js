import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { SimpleContext } from "../SimpleContext";
import Header from "../Header/Header";

const Home = () => {
  const { responseData, setResponseData } = useContext(SimpleContext);
  //const [bookResults, setBookResults] = useState([]);

  // fetch GET /get-books to get all books IDs
  useEffect(() => {
    fetch("/api/get-books")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(`Error in Feed: ${error}`);
      });
  }, []);

  return (
    responseData && (
      <Wrapper>
        {responseData.map((book) => {
          const journey = [];
          return (
            <React.Fragment key={book._id}>
              {/* {book._id} */}
              {book.quotes[0].forEach((element) => {
                //console.log(element);
                if (element.readingJourney) {
                  //console.log("hello");
                  journey.push(element.readingJourney);
                }
                //console.log(journey);
              })}
              <BookList>
                <Titles>Titles</Titles>
                <Ul>
                  {journey.map((item) => {
                    console.log(item.title);
                    return <li key={item.percent}>{item.title}</li>;
                  })}
                </Ul>
              </BookList>
            </React.Fragment>
          );
        })}
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  //margin: 20% 3%;
`;
const BookList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 25vw;
  height: 100vh;
  padding: 3% 0 0 3%;
  font-size: 0.9em;
  font-weight: 300;
  background-color: aliceblue;
`;
const Ul = styled.ul`
  margin: 2% 0% 0%;
  font-weight: 300;
`;
const Titles = styled.h4`
  padding: 0 0 0 0;
`;

export default Home;
