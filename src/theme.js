// theme setup with Material UI
// if stuck settin up, reference: https://kitson-broadhurst.medium.com/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887

import { createMuiTheme } from '@material-ui/core/styles';
import RobotoFont from 'fonts/Roboto-Black.ttf';

//Setup fonts
const Roboto = [{
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Roboto'),
    url(${RobotoFont}) format('ttf)
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}]

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF'
      },
      secondary: { 
        main: '#FF370B',
        dark: '#D84929' 
      },
      
      text: {

      }
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    typography: {
      fontFamily: 'Roboto',
      button: {
      textTransform: "none",
      }
    }
});
  
export default theme;