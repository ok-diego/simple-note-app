import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

import Home from "../Home";

const Quotes = () => {
  // const [selectedBook, setSelectedBook] = useState([]);

  const { responseData, selectedBook, setSelectedBook } =
    useContext(SimpleContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/get-book-chapters/${id}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setSelectedBook(response.data);
      })
      .catch((error) => {
        console.log(`Error in feed: ${error}`);
      });
  }, []);

  return (
    responseData &&
    selectedBook && (
      <Wrapper>
        <Home />
        <Main>
          <Title>Chapters</Title>
          {/* {console.log(selectedBook)} */}

          {selectedBook.quotes?.map((book) => {
            console.log(book);
            return (
              <React.Fragment key={book.timestamp}>
                {book.map((element) => {
                  console.log(element);
                  return <Li key={element.timestamp}>{element.quote}</Li>;
                })}
              </React.Fragment>
            );
          })}
        </Main>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
`;
const Main = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  flex: 0 0 70%;
  padding: 2% 3%;
`;
const Title = styled.h4`
  //padding: 1% 0 0 0;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
`;
const Li = styled.li`
  padding: 2% 0 0 0;
`;

export default Quotes;
