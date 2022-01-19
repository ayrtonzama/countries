import CountryCard from "../components/CountryCard";
import {
  getAllCountries,
  getRegion,
  getAllCountriesSearch,
} from "../pages/api/home";
import { Grid } from "@mui/material";
import Filter from "../components/Filter";
import { useState } from "react";

function Home({ data }) {
  const hardCountries = data;
  const [countries, setCountries] = useState(data);
  const [textSearch, setTextSearch] = useState("");
  const [regionFilter] = useState(null);

  /**
   * Search for region and if world is selected goes to search method
   *
   * @param {*} region
   */
  async function searchRegion(region) {
    if (region.target.value !== "World") {
      let results = await getRegion(region.target.value);
      const remapping = results.data.map((result) => {
        return {
          name: result.name.common,
          population: result.population,
          region: result.region,
          flag: result.flags.png,
          capital: result.capital[0] ? result.capital[0] : "",
        };
      });
      setCountries(remapping);
    } else {
      search("");
    }
  }

  /**
   * Search for text on api
   *
   * @param {*} text
   */
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
      <Filter
        countries={hardCountries}
        search={textSearch}
        onSearch={(text) => search(text)}
        filter={regionFilter}
        onFilter={(region) => searchRegion(region)}
      ></Filter>

      <div className="countries-main">
        <Grid
          container
          columnSpacing={{ xs: 1, md: 9 }}
          rowSpacing={{ xs: 1, md: 9 }}
        >
          {countries.map((country) => (
            <Grid item xs={12} md={3} sm={4} key={country.name} >
              <div className="country-card">
                <CountryCard country={country}></CountryCard>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

/**
 * Initial load of countries
 *
 * @param {*} context
 */
Home.getInitialProps = async (ctx) => {
  const results = await getAllCountries();
  return { data: results.data };
};

export default Home;
