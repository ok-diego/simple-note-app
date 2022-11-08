import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header/Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}
