import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router";
import logo from "@assets/N.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              {<img src={logo} style={{ width: 30, marginRight: 6 }} />}
              Naveen Prashanna
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/work">
                <Nav.Link>Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/publications">
                <Nav.Link>Publications</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/hobbies">
                <Nav.Link>Hobbies</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default withRouter(Navigation);
