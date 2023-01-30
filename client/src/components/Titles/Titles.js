import styled from "styled-components";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

const Titles = () => {
  const { responseData, selectedBook, setSelectedBook } =
    useContext(SimpleContext);

  return (
    <Wrapper>
      <Title>Titles</Title>

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
            <Ul>
              {journey.map((item) => {
                //console.log(book._id);
                return (
                  <Li key={item.percent}>
                    <Link to={`/chapters/${book._id}`}>{item.title}</Link>
                  </Li>
                );
              })}
            </Ul>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  background-color: #bdb8d9;
  flex: 0 0 25%;
  min-width: 25vw;
  min-height: 100vh;
  //padding: 3% 5%;
`;
const Ul = styled.ul`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-weight: 300;
  padding: 1% 4%;
`;
const Li = styled.li`
  padding: 3% 0 0 0;
`;
const Title = styled.h4`
  padding: 7% 5% 0 4%;
`;

export default Titles;
