import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Chapters from "./Chapters";
import Quotes from "./Quotes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chapters/:id" element={<Chapters />} />
          <Route path="/quotes/:id/:chapterId" element={<Quotes />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
const width = 42;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 42rem;
  margin: 0 auto 0 calc(50vw - ${width / 2}rem);
  padding: 2.625rem 1.3125rem;

  @media only screen and (max-width: 42rem) {
    margin: auto;
  }
`;

export default App;
