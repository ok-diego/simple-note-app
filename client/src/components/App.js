import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header/Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
