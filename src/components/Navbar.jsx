import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
function Navbar() {
   return (
      <nav className="nav">
         <div className="logo">FakeStore</div>
         <div className="nav-links">
            <NavLink className="nav-link" to="/" exact={true}>
               Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
               About
            </NavLink>
            <NavLink className="nav-link" to="/products">
               Products
            </NavLink>
         </div>
      </nav>
   );
}

export default Navbar;
