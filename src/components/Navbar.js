import { Link } from "react-router-dom"
import "../style/navbar.css"
const Navbar = () => {
  return (
    <nav>
      <Link to="/first">No.1</Link>
      <Link to="/second">No.2</Link>
      <Link to="/third">No.3</Link>
    </nav>
  );
};

export default Navbar;
