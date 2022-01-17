import { Autocomplete, TextField } from "@mui/material";

export default function Filter({ countries, onFilter, onSearch }) {
  return (
    <>
      <div className="filter-container">
        <div className="row">
          <div className="col">
            <Autocomplete
              options={countries.map((country) => country.name)}
              onChange={(_,value)=>{
                console.log("e value",value)
                onSearch(value)}}
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
          </div>
          <div className="col"></div>
        </div>
      </div>
     
    </>
  );
}
