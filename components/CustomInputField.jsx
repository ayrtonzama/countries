import { useTheme,styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {TextField,Paper} from "@mui/material";
// import InputLabel from '@mui/material/InputLabel';

import SearchIcon from '@mui/icons-material/Search';
export default function CustomInputField({label,onChange,params,variant='filled',value}){
    const theme=useTheme()

return ( 
<Paper elevation={2} sx={{display:'flex'}}>
<SearchIcon sx={{margin:'auto',marginLeft:1,}}/>
<InputBase
    inputProps={params.inputProps}
    fullWidth
    id='search-bar'
    className={'default-input-field search-bar'}
    variant='outlined'
    outline='none'
    onChange={(event) => {
        onChange(event)
    }}
    placeholder="Search for a country..."
    value={value}
    />
    </Paper>
    )
}