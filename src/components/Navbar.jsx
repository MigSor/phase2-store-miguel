import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";
function Navbar() {
   return (
      <nav className={styles.nav}>
         <div className={styles.logo}>FakeStore</div>
         <div className={styles.navLinks}>
            <NavLink style={(isActive) => ({ color: isActive ? "white" : "black" })} className={styles.navLink} to="/" exact={true}>
               Home
            </NavLink>
            <NavLink style={(isActive) => ({ color: isActive ? "white" : "black" })} className={styles.navLink} to="/about">
               About
            </NavLink>
            <NavLink style={(isActive) => ({ color: isActive ? "white" : "black" })} className={styles.navLink} to="/products">
               Products
            </NavLink>
         </div>
      </nav>
   );
}

export default Navbar;
