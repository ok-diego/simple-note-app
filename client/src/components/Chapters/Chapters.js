import styled from "styled-components";

const Chapters = () => {
  return (
    <Wrapper>
      <Title>Chapters</Title>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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

export default Chapters;
