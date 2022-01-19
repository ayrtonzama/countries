import InputBase from "@mui/material/InputBase";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function CustomInputField({ onChange, params, variant = "outlined", value }) {
  return (
    <Paper elevation={2} sx={{ display: "flex" }}>
      <SearchIcon sx={{ margin: "auto", marginLeft: 2, marginRight: 2 }} />
      <InputBase
        inputProps={params.inputProps}
        fullWidth
        id="search-bar"
        className={"default-input-field search-bar"}
        variant={variant}
        outline="none"
        onChange={(event) => {
          onChange(event);
        }}
        placeholder="Search for a country..."
        value={value}
      />
    </Paper>
  );
}

export default CustomInputField;
