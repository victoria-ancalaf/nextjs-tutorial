import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#fdd835',
    },
    accent: {
      main: '#2962ff',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    textDecoration: "none",
  },
});


export default theme;
