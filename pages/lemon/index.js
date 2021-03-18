import Link from "next/link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lemons: data },
  };
};

const useStyles = makeStyles({
  lemonLink: {
    background: "#efebe9",
    display: "block",
    padding: "2px 16px",
    margin: "20px 10px",
    borderLeft: " 8px solid #d7ccc8",
    "&:hover": {
      borderLeft: " 8px solid #ffeb3b",
    },
    color: "#424242",
    textDecoration: "none",
  },
});

const Lemon = ({ lemons }) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography>
        <Typography color="primary" variant="h3" gutterBottom>
          Lemons 
        </Typography>
        {lemons.map((lemon) => (
          <Link
            href={"/lemon/" + lemon.id}
            key={lemon.id}
            style={{ textDecoration: "none" }}
          >
            <a className={classes.lemonLink}>
              <h3>{lemon.name}</h3>
            </a>
          </Link>
        ))}
      </Typography>
    </Container>
  );
};

export default Lemon;
