import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div>A single-page web-app to browse and read your book highlights.</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 2.625rem;
`;

export default About;
