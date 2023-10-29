import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Modal from "./Modal";

function Navbar() {
   const [showModal, setShowModal] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const history = useHistory();

   function toggleModal() {
      setShowModal(!showModal);
   }

   function toggleLoggedIn() {
      setIsLoggedIn(!isLoggedIn);
   }

   return (
      <nav className={styles.nav}>
         <div className={styles.logo} onClick={() => history.push("/")}>
            FakeStore
         </div>
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
         {!isLoggedIn && (
            <div className={styles.login} onClick={() => toggleModal()}>
               <h5>Sign up</h5>
            </div>
         )}
         {isLoggedIn && (
            <h5 className={styles.myAccount} onClick={() => history.push("/account")}>
               MyAccount
            </h5>
         )}
         {showModal && <Modal toggleModal={toggleModal} toggleLoggedIn={toggleLoggedIn} />}
      </nav>
   );
}

export default Navbar;
