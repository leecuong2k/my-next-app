import Head from "next/head";
import { Container } from "react-bootstrap";

import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next App</title>
      </Head>

      <header>
        <NavbarMenu />
      </header>

      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default Layout;