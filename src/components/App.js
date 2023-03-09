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
      </Layout>
    </BrowserRouter>
  );
}
const Layout = styled.div`
  /* max-width: 42rem;
  height: 100vh;
  margin: auto;
  padding: 0rem 1.3125rem; */
`;
export default App;
