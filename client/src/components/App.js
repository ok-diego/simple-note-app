import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Quotes from "./Quotes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chapters/:id" element={<Quotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
