import CountryCard from "../components/CountryCard";
import getAllCountries from "../pages/api/home";
import { Grid, Container } from "@mui/material";
import Filter from "../components/Filter";
import { useState } from "react";

function Home({ data }) {
  const hardCountries = data;
  const [countries, setCountries] = useState(data);

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
        ></Filter>
      </div>

      <Grid container spacing={10}>
        {countries.map((country) => (
          <Grid item sm={1} md={3} key={country.name} >
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
