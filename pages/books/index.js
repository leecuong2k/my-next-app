import Link from "next/link";
import { Button, Card } from "react-bootstrap";

import Layout from "../../components/Layout";
import { getBookes } from "../../lib/book";

const Books = ({ books }) => {

  return (
    <Layout>
      <div className="mt-5">
        {books.map((book, index) =>
          <Card key={index} className="my-3 shadow">
            <Card.Body>
              <Card.Title>{book.bookName}</Card.Title>
              <Card.Text>{book.bookContent}</Card.Text>
              <Link href="/">
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        )}
      </div>
    </Layout >
  )
};

export const getStaticProps = () => {
  const books = getBookes();

  return {
    props: {
      books
    }
  };
};

export default Books;