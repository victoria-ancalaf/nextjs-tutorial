import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import HomeBtn from "../components/HomeBtn/HomeBtn";

export default function Home() {
  return (
    <>
      <div>
        <Typography align="center" color="primary">
          <h1>Homepage</h1>
        </Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consequat dignissim finibus. Donec hendrerit orci sit amet nunc
              scelerisque scelerisque. Quisque fermentum erat placerat, commodo
              ipsum eu, tristique nisl. Proin efficitur volutpat neque ut
              maximus. Donec justo velit, volutpat eu rutrum ac, lobortis quis
              felis. Pellentesque sed ultrices quam. Pellentesque id tortor
              imperdiet, iaculis elit sed, gravida elit.
            </p>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consequat dignissim finibus. Donec hendrerit orci sit amet nunc
              scelerisque scelerisque. Quisque fermentum erat placerat, commodo
              ipsum eu, tristique nisl. Proin efficitur volutpat neque ut
              maximus. Donec justo velit, volutpat eu rutrum ac, lobortis quis
              felis. Pellentesque sed ultrices quam. Pellentesque id tortor
              imperdiet, iaculis elit sed, gravida elit.
            </p>
          </Typography>
          <Link href="/lemon" passHref>
            <HomeBtn />
          </Link>
        </Container>
      </div>
    </>
  );
}
