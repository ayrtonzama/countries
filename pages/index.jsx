import CountryCard from "../components/CountryCard";
import {
  getAllCountries,
  getRegion,
  getAllCountriesSearch,
} from "../pages/api/home";
import { Grid, Container } from "@mui/material";
import Filter from "../components/Filter";
import { useState } from "react";

function Home({ data }) {
  const hardCountries = data;
  const [countries, setCountries] = useState(data);
  const [textSearch, setTextSearch] = useState("");
  const [regionFilter, setRegion] = useState(null);

  async function searchRegion(region) {
    console.log("in",region.target.value)
    if(region.target.value!=='World'){
      console.log("in here")

      let results=await getRegion(region.target.value)
      const remapping=results.data.map(result=>{
        return {
        name:result.name.common,
        population:result.population,
        region:result.region,
        flag:result.flags.png,
        capital:result.capital[0]?result.capital[0]:''
      }
    })
    // setRegion(region)
    setCountries(remapping)
  }else{
    search("")
  }

  }
  async function search(text) {
    let filtered;
    if (text == "") {
      filtered = hardCountries;
      setTextSearch(text);
      setCountries(filtered);
    } else {
      filtered = await getAllCountriesSearch(text);
      setTextSearch(text);
      setCountries(filtered.data);
    }
  }
  return (
    <div>
      <div className="">
        <Filter
          countries={hardCountries}
          search={textSearch}
          onSearch={(text) => search(text)}
          filter={regionFilter}
          onFilter={(region) => searchRegion(region)}
        ></Filter>
      </div>
      <div className="countries-main">
        <Grid
          container
          columnSpacing={{ xs: 2, md: 9 }}
          rowSpacing={{ xs: 2, md: 9 }}
        >
          {countries.map((country) => (
            <Grid item xs={12} md={3} key={country.name}>
              <div className="CountryCard">
                <CountryCard country={country}></CountryCard>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const countries = await getAllCountries();

  return { data: countries.data };
};
export default Home;
