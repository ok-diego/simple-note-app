import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SimpleContext = createContext(null);

export const SimpleProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [booksJourney, setBooksJourney] = useState([]);

  // fetch GET /get-books to get all books IDs
  useEffect(() => {
    fetch("/api/get-books")
      //fetch("/.netlify/functions/get_books")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setResponseData(response.body);
      })
      .catch((error) => {
        console.log(`Error in Feed: ${error}`);
      });
  }, []);

  // {
  //   async () => {
  //     try {
  //       await fetch("/.netlify/functions/get_books")
  //         .then((res) => res.json())
  //         .then((response) => {
  //           console.log(response);
  //           setResponseData(response.body);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }

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
