import CountryCard from "../components/CountryCard";
import getAllCountries from "../pages/api/home";
import {Grid,Container} from '@mui/material'
import Filter from "../components/Filter";
function Home({data}) {
  
  const countries=data
 
  return (
    <div>
      <div className="">
        <Filter countries={countries}></Filter>
      </div>

      <Grid container spacing={4}>
        
        {countries.map((country) => (
          <Grid item xs={1} md={3} key={country.name}>
            <CountryCard country={country}></CountryCard>
          </Grid>
        ))}
      </Grid>
  
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const countries = await getAllCountries();
  
  return { data: countries.data };
};
export default Home;
