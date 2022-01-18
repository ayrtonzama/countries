import {
  Autocomplete,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import  CustomInputField from "./CustomInputField";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function Filter({ countries, onFilter, onSearch, filter }) {
  const theme=useTheme()
  return (
    <>
      <div className="filter-container">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={4}>
            <Autocomplete
              options={countries.map((country) => country.name)}
              onChange={(_, value) => {
                onSearch(value);
              }}
              renderInput={(params) => (
                <CustomInputField onChange={(event) => {
                  
                  onSearch(event.target.value);
                }} params={params}
                label="Search for a country..."
                />
            
              )}
            ></Autocomplete>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="region-label">
                Filter by Region
              </InputLabel>
              <Select
              className={theme.palette.mode+'-field'}
                labelId="demo-simple-select-label"
                value={filter}
                label="Region"
                onChange={onFilter}
              >
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>{region}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
