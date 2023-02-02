import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

import Home from "../Home";

const Quotes = () => {
  const { responseData, selectedBook } = useContext(SimpleContext);

  const { id, chapterId } = useParams();
  //console.log(chapterId);

  return (
    responseData &&
    selectedBook && (
      <Wrapper>
        <Home />
        <Main>
          <Title>Quotes</Title>
          {/* {console.log(responseData)} */}

          {responseData.map((book) => {
            // {console.log(book._id)}

            if (book._id == id) {
              return (
                <React.Fragment key={book._id}>
                  <Ul>
                    {book.quotes[1].map((element) => {
                      // console.log(element);
                      if (element.chapter == chapterId) {
                        return <Li key={element.timestamp}>{element.quote}</Li>;
                      }
                    })}
                  </Ul>
                </React.Fragment>
              );
            }
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
  flex-direction: column;
  padding: 1% 0 0 0;
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
