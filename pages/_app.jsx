import "../styles/globals.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptionsDark, themeOptionsLight } from "../styles/ThemeOptions";
import {useState} from 'react'
function MyApp({ Component, pageProps }) {
  const [mode,setMode] = useState('light')
  return (
    <ThemeProvider theme={mode=='light'?themeOptionsLight:themeOptionsDark}>
      <Layout themeMode={mode} >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
