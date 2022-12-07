import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { publiceRoute } from './routes';
import classes from '../styles/Layout.module.css';

const NavbarMenu = () => {
  const { pathname } = useRouter();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className='navbar-brand' href="/">My Next App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {publiceRoute.map((route) => (
              <Link
                key={route.id}
                href={route.path}
                className={`nav-link ${pathname === route.path ? classes.active : ''}`}
              >
                {route.component}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu;