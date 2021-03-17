import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

const HomeBtn = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" href="/lemon">
          See Lemon Listing
        </Button>
      </ThemeProvider>
    </Container>
  );
};

export default HomeBtn;
