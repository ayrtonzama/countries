import { createTheme } from '@mui/material/styles';
export const themeOptionsDark = createTheme({
   palette:{
       mode:'dark',
       primary:{
           main:'#ffffff',
           light:'#ffffff',
   
           contrastText: '#000000',
       },
       secondary:{
        main:'#fafafa',
        
       },
       background:{
           default:'#eeeeee',
           paper:'#202d36'
       },
       text:{
           
       }
       
   }
})



export const themeOptionsLight=createTheme({
    palette:{
        mode:'light',
        primary:{
            main:'#ffffff',
            contrastText: '#000000',
        },
        secondary:{
         main:'#fafafa',
         dark:'#2B3743'
        },
        background:{
            default:'#fafafa',
            paper:'#ffffff'
        },
        text:{
            
        }
        
    }
})