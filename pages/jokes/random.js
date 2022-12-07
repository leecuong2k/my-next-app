import Link from "next/link";
import { Button, Card } from "react-bootstrap";

import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }) => {

  return (
    <Layout>
      <div className="mt-5">
        <Card className="my-3 shadow">
          <Card.Body>
            <Card.Title>Here&apos;s your random joke for today</Card.Title>
            <Card.Text>{joke.value}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Layout >
  )
};

export const getServerSideProps = async (context) => {
  const joke = await getRandomJoke();

  if (!joke)
    return {
      notFound: true,
    };

  return {
    props: {
      joke
    }
  };
};

export default Random