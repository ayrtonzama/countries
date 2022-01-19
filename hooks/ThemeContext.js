import { createContext, useContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themePallete } from "../styles/ThemeOptions";

// Create Contexts
export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

//  Use Contexts
export function useTheme() {
  return useContext(ThemeContext);
}

//  Use context update theme
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProviderContainer({ children }) {
  const [mode, setMode] = useState("light");

  function toggleTheme() {
    setMode((prevMode) => (prevMode == "light" ? "dark" : "light"));
  }

  const theme = useMemo(() => createTheme(themePallete(mode)), [mode]);

  return (
    <ThemeUpdateContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeUpdateContext.Provider>
  );
}
