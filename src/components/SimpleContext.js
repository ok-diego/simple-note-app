import { createContext, useState, useEffect } from "react";

export const SimpleContext = createContext(null);

export const SimpleProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [booksJourney, setBooksJourney] = useState([]);

  // fetch GET /get-books to get all books IDs
  useEffect(() => {
    //fetch("/api/get-books")
    fetch("/.netlify/functions/handlers")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setResponseData(response);
      })
      .catch((error) => {
        console.log(`Error in Feed: ${error}`);
      });
  }, []);

  return (
    <SimpleContext.Provider
      value={{
        state,
        setState,
        responseData,
        setResponseData,
        selectedBook,
        setSelectedBook,
        booksJourney,
        setBooksJourney,
      }}
    >
      {children}
    </SimpleContext.Provider>
  );
};
