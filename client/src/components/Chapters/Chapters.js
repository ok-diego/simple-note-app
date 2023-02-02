import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SimpleContext } from "../SimpleContext";

import Home from "../Home";

const Chapters = () => {
  const { responseData, selectedBook, setSelectedBook } =
    useContext(SimpleContext);

  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    fetch(`/api/get-book-chapters/${id}`)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setSelectedBook(response.data);
      })
      .catch((error) => {
        console.log(`Error in feed: ${error}`);
      });
  }, [id]);

  return (
    responseData &&
    selectedBook && (
      <Wrapper>
        <Home />
        <Main>
          <Title>Chapters</Title>
          {/* {console.log(selectedBook)} */}

          {selectedBook.map((chapter) => {
            //console.log(chapter);

            return (
              <React.Fragment key={chapter}>
                <Li>
                  <NavLinkMenu to={`/quotes/${id}/${chapter}`}>
                    {chapter}
                  </NavLinkMenu>
                </Li>
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

export default Chapters;
