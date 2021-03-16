import Link from 'next/link';
import styles from '../../styles/Lemon.module.css';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lemons: data },
  };
};

const Lemon = ({ lemons }) => {
  return (
    <div>
      <h1>All Lemons</h1>
      {lemons.map((lemon) => (
        <Link href={'/lemon/' + lemon.id} key={lemon.id}>
          <a className={styles.single}>
            <h3>{lemon.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Lemon;
