import Link from "next/link";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderBottom: "1px solid #ffa000",
    padding: "10px 0",
    margin: "10px auto 80px",
  },
  logo: {
    marginLeft: "auto",
  },
  navLinks: {
    color: '#3e2723',
    marginLeft: "12px",
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.logo}>
        <Image src="/logo.png" width={98} height={90} />
      </Box>
      <Typography>
        <Link href="/">
          <a className={classes.navLinks}>Home</a>
        </Link>
        <Link href="/about">
          <a className={classes.navLinks}>About</a>
        </Link>
        <Link href="/lemon">
          <a className={classes.navLinks}>Lemon Listing</a>
        </Link>
      </Typography>
    </Container>
  );
};

export default Navbar;
