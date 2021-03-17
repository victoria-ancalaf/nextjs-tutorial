import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="overline" display="block" gutterBottom align="center" color="textSecondary">
        Copyright 2021 Lemon List
      </Typography>
    </Container>
  );
};

export default Footer;
