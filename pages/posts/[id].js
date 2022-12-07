import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Spinner } from "react-bootstrap";

import Layout from "../../components/Layout"
import { getPostById, getPostIds } from "../../lib/post";

const PostsDetail = ({ post }) => {
  const router = useRouter();

  // Neu trang chua tao ra, isFallBack cua router === true
  // Va trang tam thoi sau day se duoc render

  if (router.isFallback) {
    return <Spinner animation="border" role="status" variant="dark" />
  }

  return (
    <Layout>
      <div className="mt-5">
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href="/posts">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  )
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);

  return {
    paths,
    // fallback: false, // bất khì path nào không return bởi getStaticProps sẽ tới trang 404 :))
    fallback: true, // path nào không return ngay lập tức sẽ show trang 'tạm thời' => đợi getStaticProps chạy xong => return trang tạm thời
  }
};

export const getStaticProps = async ({ params: { id } }) => {
  const post = await getPostById(id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  }
};

export default PostsDetail;