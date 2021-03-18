import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 10,
  },
});

const HomeBtn = React.forwardRef(({ onClick, href }, ref) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        href={href}
        onClick={onClick}
        ref={ref}
      >
        See Lemon Listing
      </Button>
    </Container>
  );
});

export default HomeBtn;
