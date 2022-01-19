import {
  Autocomplete,
  MenuItem,
  Select,
  Grid,
  Paper,
  FormControl,
  OutlinedInput
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomInputField from "./CustomInputField";
const regions = ["World","Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function Filter({
  countries,
  onFilter,
  onSearch,
  filter,
  search,
}) {
  const theme = useTheme();
  return (
    <>
      <div className="filter-container">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item sm={4} xs={12} sx={{ marginTop: 2 }}>
            <Autocomplete
              options={countries.map((country) => country.name)}
              onChange={(_, value) => {
                onSearch(value);
              }}
              renderInput={(params) => (
                <CustomInputField
                  onChange={(event) => {
                    onSearch(event.target.value);
                  }}
                  params={params}
                  label="Search for a country..."
                  value={search}
                />
              )}
            ></Autocomplete>
          </Grid>
          <Grid item sm={4} xs={12}></Grid>
          <Grid item sm={2} xs={12} sx={{ marginTop: 2 }}>
            <Paper elevation={2}>
              <FormControl fullWidth>
                <Select
                  sx={{ outline: "none", border: "none" }}
                  fullWidth
                  displayEmpty
                  onChange={onFilter}
                  labelId="select-region"
                  value={filter}
                  variant="outlined"
                  outline="none"
                  placeholder="Filter to Region"
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected=== null) {
                      return <em>Filter to Region</em>;
                    }

                    return selected.join(", ");
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value={null}>
                    <em>Filter to Region</em>
                  </MenuItem>
                  {regions.map((region) => (
                    <MenuItem key={region} value={region}>
                      {region}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
