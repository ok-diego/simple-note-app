import { createContext, useState } from "react";

export const SimpleContext = createContext(null);

export const SimpleProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);

  return (
    <SimpleContext.Provider
      value={{
        state,
        setState,
        responseData,
        setResponseData,
        selectedBook,
        setSelectedBook,
      }}
    >
      {children}
    </SimpleContext.Provider>
  );
};
