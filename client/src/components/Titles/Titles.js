import styled from "styled-components";
import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

const Titles = () => {
  const { responseData, booksJourney, setBooksJourney } =
    useContext(SimpleContext);

  useEffect(() => {
    fetch("/api/get-books-journey")
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setBooksJourney(response.data);
      })
      .catch((error) => {
        console.log(`Error in feed: ${error}`);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Titles</Title>
      {responseData.map((book) => {
        return (
          <React.Fragment key={book._id}>
            <Ul>
              {book.quotes[0].map((element) => {
                // console.log(element);
                return (
                  <Li key={element.readingJourney.titleId}>
                    <NavLinkMenu to={`/chapters/${book._id}`}>
                      {element.readingJourney.title}
                    </NavLinkMenu>
                  </Li>
                );
              })}
              {/* {booksJourney.map((item) => {
                //console.log(item);
                return (
                  <Li key={item.titleId}>
                    <NavLinkMenu to={`/chapters/${book._id}`}>
                      {item.title}
                    </NavLinkMenu>
                  </Li>
                );
              })} */}
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

export default Titles;
