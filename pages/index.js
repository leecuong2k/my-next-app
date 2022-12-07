import Link from "next/link";
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-4">My Next App!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link href="/posts">
            <Button>Posts</Button>
          </Link>
        </p>
      </div>
    </Layout>
  )
}
