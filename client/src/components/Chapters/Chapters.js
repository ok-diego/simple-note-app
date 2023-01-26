import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

const Chapters = () => {
  const [selectedBook, setSelectedBook] = useState([]);

  // const { responseData, selectedBook, setSelectedBook } =
  //   useContext(SimpleContext);

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
    selectedBook && (
      <Wrapper>
        <Title>Chapters</Title>
        {/* {console.log(selectedBook)} */}

        {selectedBook.quotes?.map((book) => {
          //console.log(book);

          const arrQuotes = [];
          const uniqueChapters = [];

          return (
            <React.Fragment key={book.timestamp}>
              {book.forEach((element) => {
                //console.log(element);
                arrQuotes.push(element.quote);
              })}

              {arrQuotes.map((quote) => {
                return (
                  <Ul>
                    <Li>{quote}</Li>
                  </Ul>
                );
              })}
            </React.Fragment>
          );
        })}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 2% 0 0 2%;
  //margin: 20% 3%;
`;
const Title = styled.h4`
  padding: 1% 0 0 0;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-weight: 200;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 50%;
  height: 20%;
  align-items: flex-start;
  padding: 3% 0 0 0;
`;

export default Chapters;
