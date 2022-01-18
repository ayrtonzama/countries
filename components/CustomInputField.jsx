import { useTheme,styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {TextField} from "@mui/material";
// import InputLabel from '@mui/material/InputLabel';
export default function CustomInputField({label,onChange,params,variant='filled'}){
    const theme=useTheme()
  

return ( <TextField
    {...params}
    className={theme.palette.mode+'-field'}
    variant='outlined'
    onChange={(event) => {
      onChange(event)
    }}
    placeholder="Search for a country..."
  />)
}