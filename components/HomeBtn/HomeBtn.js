import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider  } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


const HomeBtn = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" className="classes.margin">See Lemon Listing</Button>
    </ThemeProvider>
  );
};

export default HomeBtn;
