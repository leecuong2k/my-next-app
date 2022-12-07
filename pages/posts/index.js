import { Card } from 'react-bootstrap'
import Link from 'next/link';

import Layout from '../../components/Layout'
import { getPosts } from '../../lib/post';

const Posts = ({ posts }) => {
  return (
    <Layout>
      <div className="mt-5">
        {posts.map(post => (
          <Card key={post.id} className="my-3 shadow">
            <Card.Body>
              <Card.Title>{post.id} -- {post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link href={`/posts/${post.id}`}>
                See more
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Layout>
  )
};

// Get static data from backend /db /api
export const getStaticProps = async () => {
  const data = await getPosts(10);

  return {
    props: { posts: data },
  }
};

export default Posts;

