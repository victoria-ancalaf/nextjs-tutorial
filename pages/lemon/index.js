import Link from 'next/link';
import Container from "@material-ui/core/Container";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lemons: data },
  };
};

const Lemon = ({ lemons }) => {
  return (
    <Container>
      <h1>All Lemons</h1>
      {lemons.map((lemon) => (
        <Link href={'/lemon/' + lemon.id} key={lemon.id}>
          <a>
            <h3>{lemon.name}</h3>
          </a>
        </Link>
      ))}
    </Container>
  );
};

export default Lemon;
