import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

// create theme context
const ThemeContext = createContext();

const preferColorSchemeQuery = "(prefers-color-scheme: dark)";

const giveInitialTheme = () =>
  localStorage.getItem("theme") ||
  (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");

// theme context provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(giveInitialTheme());

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useEffect(() => {
    const mediaQuery = matchMedia(preferColorSchemeQuery);
    const handleColorSchemeChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useLayoutEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to avail theme value
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// exports
export { ThemeProvider, useTheme };
