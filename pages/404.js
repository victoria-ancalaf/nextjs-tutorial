import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <Container align="center">
      <Typography variant="h3" gutterBottom>
        Oooops...
      </Typography>
      <Typography variant="h4" gutterBottom>
        That page cannot be found.
      </Typography>
      <Image
        src="/run.png"
        alt="Go back to the Homepage"
        width={240}
        height={160}
      />
      <Typography variant="h5" align="center" gutterBottom>
        Go back to the <Link href="/">Homepage</Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
