import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components'
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottom: '1px solid #ffa000',
    padding: '10px 0',
    margin: '10px auto 80px',
  },
}));

const NavLink = styled.a`
  text-decoration: none;
  margin-left: 12px;
  color: gray;
`

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <Box mr="auto">
          <Image src="/logo.png" width={98} height={90} />
        </Box>
        <Typography ml="12px">
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/lemon" passHref>
          <NavLink>Lemon Listing</NavLink>
        </Link>
        </Typography>
    </Container>
  );
};

export default Navbar;
