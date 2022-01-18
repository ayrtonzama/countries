import { createContext, useContext, useState,useMemo } from "react";
import { createTheme,ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { themePallete } from "../styles/ThemeOptions";
export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();
export function useTheme() {
   
  return useContext(ThemeContext);
}

export function useThemeUpdate(){
    console.log("ijsdhfokjsdhfok")
    return useContext(ThemeUpdateContext)
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
        <CssBaseline/>
        {children}
        </ThemeProvider>
        
      </ThemeUpdateContext.Provider>
  );
}
