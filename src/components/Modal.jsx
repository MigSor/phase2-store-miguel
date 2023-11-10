import styles from "./Navbar.module.css";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
function Modal({ toggleModal, toggleLoggedIn }) {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [isSignedUp, setIsSignedUp] = useState(true);

   function submitHandler(e) {
      e.preventDefault();
      console.log("submitted");

      const userData = {
         name,
         email,
         password,
         address,
         phone,
      };

      const options = {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(userData),
      };
      fetch("https://phase2-server.onrender.com/users", options)
         .then((res) => res.json())
         .then((data) => {
            setIsSignedUp(!isSignedUp);
            toggleLoggedIn();
         });
   }

   return (
      <div className={styles.modalWrapper}>
         <div className={styles.modal}>
            <h5
               onClick={() => {
                  toggleModal();
               }}
            >
               X
            </h5>
            <h3>Sign Up Form</h3>
            {isSignedUp && (
               <SignUpForm
                  submitHandler={submitHandler}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  address={address}
                  setAddress={setAddress}
                  phone={phone}
                  setPhone={setPhone}
               />
            )}
            {!isSignedUp && <h2>Thank you for signing up to FAKESTORE!</h2>}
         </div>
      </div>
   );
}

export default Modal;
