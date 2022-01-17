import {
  Autocomplete,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function Filter({ countries, onFilter, onSearch, filter }) {
  return (
    <>
      <div className="filter-container">
        <Grid container direction="row" justifyContent="space-between">
          <Grid items xs={4}>
            <Autocomplete
              options={countries.map((country) => country.name)}
              onChange={(_, value) => {
                onSearch(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(event) => {
                    onSearch(event.target.value);
                  }}
                  label="Search for a country..."
                />
              )}
            ></Autocomplete>
          </Grid>
          <Grid items xs={4}></Grid>
          <Grid items xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Filter by Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={filter}
                label="Region"
                onChange={onFilter}
              >
                {regions.map((region) => (
                  <MenuItem value={region}>{region}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
