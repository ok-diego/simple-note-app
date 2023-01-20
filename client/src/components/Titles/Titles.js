import styled from "styled-components";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

const Titles = () => {
  const { responseData } = useContext(SimpleContext);

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
                //console.log(item.title);
                return <Li key={item.percent}>{item.title}</Li>;
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
  width: 28vw;
  height: 100vh;
  background-color: #bdb8d9;
  padding: 2% 0 0 2%;
`;
// const BookList = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 25vw;
//   height: 50vh;
//   padding: 3% 0 0 0;
//   font-size: 0.9em;
//   font-weight: 300;
//   background-color: aliceblue;
// `;
const Ul = styled.ul`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-weight: 300;
`;
const Li = styled.li`
  padding: 3% 0 0 0;
`;
const Title = styled.h4`
  padding: 5% 0 0 0;
`;

export default Titles;
