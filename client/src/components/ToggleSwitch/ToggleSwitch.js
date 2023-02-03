import styled from "styled-components";

const ToggleSwitch = () => {
  const switchTheme = (event) => {
    event.PreventDefault();
  };

  return <Wrapper>Switch theme!</Wrapper>;
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

export default ToggleSwitch;
