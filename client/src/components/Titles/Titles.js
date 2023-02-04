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
                  <React.Fragment key={element.readingJourney.titleId}>
                    <Li>
                      <NavLinkMenu to={`/chapters/${book._id}`}>
                        <DivTitle>{element.readingJourney.title}</DivTitle>
                      </NavLinkMenu>
                    </Li>
                    <Li>
                      <DivAuthor>{element.readingJourney.author}</DivAuthor>
                    </Li>
                  </React.Fragment>
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
`;
const Ul = styled.ul`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-weight: 300;
  padding: 5% 0 0 0;
`;
const Li = styled.li`
  padding: 0 0 0 0;
  margin: 2% 0 0 0;
`;
const Title = styled.h3`
  padding: 0 0 0 0;
  font-family: var(--font-heading);
`;
const NavLinkMenu = styled(NavLink)`
  text-decoration: none;
  padding: 0 0 0 0;

  &:hover {
    //color: rgba(0, 0, 0, 0.8);
    color: var(--color-title-secondary);
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;
const DivAuthor = styled.div`
  padding: 0 0 0 0;
  margin: 0.5rem 0 0 0;
`;
const DivTitle = styled.div`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 0 0 0;
  color: var(--color-title-primary);
`;
export default Titles;
