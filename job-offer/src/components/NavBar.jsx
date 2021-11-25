import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => (
    <Navbar bg="dark" variant="light" id="navbar-horiz">
    <Nav className="me-auto">
        <Link to="/">
      <div className="text-white">Home</div>
      
      </Link>
      <Link to="/favorites">
      <div className="heart-saved ml-5">Favorites</div>
      </Link>
    </Nav>
  </Navbar>
)

export default NavBar