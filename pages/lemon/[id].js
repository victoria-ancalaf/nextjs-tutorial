import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((lemon) => {
    return {
      params: { id: lemon.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { lemon: data },
  };
};

const Details = ({ lemon }) => {
  return (
    <Container>
      <Typography>
        <h1>{lemon.name}</h1>
        <p>{lemon.email}</p>
        <p>{lemon.website}</p>
        <p>{lemon.address.city}</p>
      </Typography>
    </Container>
  );
};

export default Details;
