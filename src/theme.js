// theme setup with Material UI
// if stuck settin up, reference: https://kitson-broadhurst.medium.com/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: { 500: '#467fcf' },
    },
});
  
export default theme