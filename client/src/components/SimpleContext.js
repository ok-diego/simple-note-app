import { createContext, useState } from "react";

export const SimpleContext = createContext(null);

export const SimpleProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <SimpleContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </SimpleContext.Provider>
  );
};
