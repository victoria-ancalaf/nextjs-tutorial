import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <>
      <Head>
        <title>Lemon List | About</title>
        <meta name="keywords" content="lemons" />
      </Head>
      <Container>
        <Typography variant="h3" gutterBottom>
          About
          </Typography>
          <Typography variant="body1" gutterBottom>
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consequat dignissim finibus. Donec hendrerit orci sit amet nunc
            scelerisque scelerisque. Quisque fermentum erat placerat, commodo
            ipsum eu, tristique nisl. Proin efficitur volutpat neque ut maximus.
            Donec justo velit, volutpat eu rutrum ac, lobortis quis felis.
            Pellentesque sed ultrices quam. Pellentesque id tortor imperdiet,
            iaculis elit sed, gravida elit.
         
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consequat dignissim finibus. Donec hendrerit orci sit amet nunc
            scelerisque scelerisque. Quisque fermentum erat placerat, commodo
            ipsum eu, tristique nisl. Proin efficitur volutpat neque ut maximus.
            Donec justo velit, volutpat eu rutrum ac, lobortis quis felis.
            Pellentesque sed ultrices quam. Pellentesque id tortor imperdiet,
            iaculis elit sed, gravida elit.
        </Typography>
      </Container>
    </>
  );
};

export default About;
