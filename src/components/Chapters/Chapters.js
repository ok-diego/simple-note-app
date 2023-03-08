import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

import Header from "../Header";
import Footer from "../Footer";

const Chapters = () => {
  const { responseData, selectedBook, setSelectedBook } =
    useContext(SimpleContext);

  const { id } = useParams();
  //console.log(id);

  // useEffect(() => {
  //   fetch(`/api/get-book-chapters/${id}`)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       // console.log(response);
  //       setSelectedBook(response.id);
  //     })
  //     .catch((error) => {
  //       console.log(`Error in feed: ${error}`);
  //     });
  // }, [id]);

  let chaptersValues = [];
  let newChaptersSet = [];

  return (
    responseData &&
    selectedBook && (
      <Wrapper>
        <Header header />
        <Title>Chapters</Title>
        {/* {console.log(selectedBook)} */}
        <Ul>
          {responseData.map((book) => {
            if (book._id === id) {
              return (
                <React.Fragment key={book._id}>
                  {book.quotes[1].forEach((element) => {
                    chaptersValues.push(element.chapter);
                    newChaptersSet = [...new Set(chaptersValues)];
                    // sort chapters in alphabetical order
                    newChaptersSet.sort((a, b) =>
                      a === b ? 0 : a > b ? 1 : -1
                    );
                  })}
                </React.Fragment>
              );
            }
          })}
          {newChaptersSet.map((chapter) => {
            {
              console.log(chapter);
            }
            return (
              <React.Fragment key={chapter}>
                <Li>
                  <NavLinkMenu to={`/quotes/${id}/${chapter}`}>
                    <DivChapter>{chapter}</DivChapter>
                  </NavLinkMenu>
                </Li>
              </React.Fragment>
            );
          })}
          {/* 
          {selectedBook.map((chapter) => {
            //console.log(chapter);
            return (
              <React.Fragment key={chapter}>
                <Li>
                  <NavLinkMenu to={`/quotes/${id}/${chapter}`}>
                    <DivChapter>{chapter}</DivChapter>
                  </NavLinkMenu>
                </Li>
              </React.Fragment>
            );
          })} */}
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
  padding: 2% 0 0 0;
`;
const Li = styled.li`
  padding: 0 0 0 0;
  margin: 2% 0 0 0;
`;
const NavLinkMenu = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
`;
const DivChapter = styled.div`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 0 0 0;
  color: var(--color-title-primary);
  margin: 3% 0 0 0;
`;

export default Chapters;
