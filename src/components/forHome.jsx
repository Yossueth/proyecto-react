import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function forHome() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">StockX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="/home">Link</Nav.Link>
            <NavDropdown title="Marcas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nike</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Supreme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Lois Vuitton</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Supreme</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">OFF-WHITE </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hoodies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nike</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">OFF-WHITE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Supreme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Lois Vuitton</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="T-shirts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nike</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">OFF-WHITE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Supreme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Lois Vuitton</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Funglasses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Gucci</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">OFF-WHITE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Supreme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Lois Vuitton</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default forHome;
