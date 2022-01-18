import "../styles/globals.scss";
import Layout from "../components/Layout";
import { ThemeProvider ,createTheme} from "@mui/material/styles";

import { themeOptionsDark,themePallete, themeOptionsLight } from "../styles/ThemeOptions";
import {useState,useMemo,useEffect } from 'react'
import {ThemeContext} from '../hooks/ThemeContext'


function MyApp({ Component, pageProps }) {
  const [mode,setMode] = useState('light')
  const colorMode=useMemo(
    ()=>({
      toggleMode:()=>{
        setMode((prevMode)=>prevMode==='light'?'dark':'light')
      }
    })
  )

  const theme = useMemo(() => createTheme(themePallete(mode)), [mode]);
  return (
    <ThemeContext.Provider value={colorMode}>

    <ThemeProvider theme={theme}>
      <Layout themeMode={mode} >
   
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
