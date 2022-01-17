import { Autocomplete, TextField } from "@mui/material";

export default function Filter({ countries, onFilter, onSearch }) {
  return (
    <>
      <div className="filter-container">
        <div className="row">
          <div className="col">
            <Autocomplete
              options={countries.map((country) => country.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={(val) => {
                    console.log(val);
                  }}
                  label="Search for a country..."
                />
              )}
            ></Autocomplete>
          </div>
          <div className="col"></div>
        </div>
      </div>
     
    </>
  );
}
