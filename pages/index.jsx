import CountryCard from "../components/CountryCard";
import getAllCountries, { getRegion } from "../pages/api/home";
import { Grid, Container } from "@mui/material";
import Filter from "../components/Filter";
import { useState } from "react";

function Home({ data }) {
  const hardCountries = data;
  const [countries, setCountries] = useState(data);
  const [regionFilter,setRegion] =useState('World')
  async function searchRegion(region) {
    
    // }
 
 
  }
  async function search(text) {
    const filtered = hardCountries.filter((val) => {
      return val.name.includes(text);
    });

    setCountries(filtered);
  }
  return (
    <div>
      <div className="">
        <Filter
          countries={hardCountries}
          onSearch={(text) => search(text)}
          filter={regionFilter}
          onFilter={(region) => searchRegion(region)}
        ></Filter>
      </div>

      <Grid container columnSpacing={{xs:2 ,md:4}} rowSpacing={{xs:2 ,md:4}}>
        {countries.map((country) => (
          <Grid item xs={12} md={3} key={country.name} >
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
