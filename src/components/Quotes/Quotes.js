import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

import Header from "../Header";
import Footer from "../Footer";

const Quotes = () => {
  const { responseData, selectedBook } = useContext(SimpleContext);

  const { id, chapterId } = useParams();
  //console.log(chapterId);

  let quotesValues = [];

  return (
    responseData &&
    selectedBook && (
      <Wrapper>
        <Header header />
        <Title>Quotes</Title>
        {/* {console.log(responseData)} */}
        <Ul>
          {responseData.map((book) => {
            // {console.log(book._id)}

            if (book._id == id) {
              return (
                <React.Fragment key={book._id}>
                  {/* {book.quotes[1].sort((a, b) => a.percent - b.percent)} */}
                  {book.quotes[1].map((element) => {
                    // console.log(element);
                    if (element.chapter == chapterId) {
                      quotesValues.push(element.quote, element.timestamp);
                      // return <Li key={element.timestamp}>{element.quote}</Li>;
                    }
                  })}
                </React.Fragment>
              );
            }
          })}
          {quotesValues.map((quote) => {
            quotesValues.sort((a, b) => a.timestamp - b.timestamp);
            console.log(quote);
            return (
              <React.Fragment key={quote}>
                <Li>{quote}</Li>
              </React.Fragment>
            );
          })}
        </Ul>
        <Footer />
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
  max-width: 42rem;
  height: 100vh;
  margin: auto;
  padding: 2.625rem 1.3125rem;
`;
const Main = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
`;
const Title = styled.h3`
  font-family: var(--font-heading);
`;
const Ul = styled.ul`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-weight: 300;
  padding: 0 0 0 0;
`;
const Li = styled.li`
  padding: 0 0 0 0;
  margin: 3% 0 5% 0;
`;
const NavLinkMenu = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: underline;
  }
  &:link {
  }
  &:active {
  }
`;

export default Quotes;
