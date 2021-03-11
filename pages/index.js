import Head from "next/head";
import Link from "next/link";
import HomeBtn from "../components/HomeBtn/HomeBtn";


export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon List | Home</title>
        <meta name="keywords" content="lemons" />
      </Head>
      <div>
        <h1 className="title">Homepage</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consequat dignissim finibus. Donec hendrerit orci sit amet nunc
          scelerisque scelerisque. Quisque fermentum erat placerat, commodo
          ipsum eu, tristique nisl. Proin efficitur volutpat neque ut maximus.
          Donec justo velit, volutpat eu rutrum ac, lobortis quis felis.
          Pellentesque sed ultrices quam. Pellentesque id tortor imperdiet,
          iaculis elit sed, gravida elit.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consequat dignissim finibus. Donec hendrerit orci sit amet nunc
          scelerisque scelerisque. Quisque fermentum erat placerat, commodo
          ipsum eu, tristique nisl. Proin efficitur volutpat neque ut maximus.
          Donec justo velit, volutpat eu rutrum ac, lobortis quis felis.
          Pellentesque sed ultrices quam. Pellentesque id tortor imperdiet,
          iaculis elit sed, gravida elit.
        </p>
        <Link href="/lemon">
          <HomeBtn />
        </Link>
      </div>
    </>
  );
}
