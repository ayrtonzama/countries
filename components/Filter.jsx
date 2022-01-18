import {
  Autocomplete,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  NativeSelect,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomInputField from "./CustomInputField";
const regions = ["World","Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function Filter({ countries, onFilter, onSearch, filter }) {
  const theme = useTheme();
  return (
    <>
      <div className="filter-container">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item sm={4} xs={12} sx={{marginTop:2}}>
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
                />
              )}
            ></Autocomplete>
          </Grid>
          <Grid item sm={4} xs={12}></Grid>
          <Grid item sm={2} xs={12} sx={{marginTop:2}}>
            <Paper elevation={2}>
              <Select
                sx={{ outline: "none", border: "none" }}
                fullWidth
                className={theme.palette.mode + "-field"}
                labelId="demo-simple-select-label"
                value={filter}
                variant="outlined"
                outline="none"
                onChange={onFilter}
               placeholder="Filter to Region"
              >
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
