import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => (
    <Navbar bg="transparent" variant="light">
    <Nav className="me-auto">
        <Link to="/">
      <div>Home</div>
      </Link>
    </Nav>
  </Navbar>
)

export default NavBar