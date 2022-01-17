import "../styles/globals.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from '@mui/material/styles';
import {themeOptions} from '../styles/ThemeOptions'
function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider theme={themeOptions}><Layout><Component {...pageProps} /></Layout></ThemeProvider>;
}

export default MyApp;
