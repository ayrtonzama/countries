import "../styles/globals.scss";
import Layout from "../components/Layout";


import {ThemeProviderContainer} from '../hooks/ThemeContext'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProviderContainer>

      <Layout  >
   
        <Component {...pageProps} />
      </Layout>
    </ThemeProviderContainer>
   
  );
}

export default MyApp;
