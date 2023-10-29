import React, { useState, useEffect } from "react";
import styles from "./Account.module.css";
import avatar from "../assets/user1.png";
function Account() {
   const [user, setUser] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/users")
         .then((res) => res.json())
         .then((data) => {
            setUser(data[data.length - 1]);
            console.log(user);
         });
   }, []);

   return (
      <div className={styles.wrapper}>
         <img src={avatar} alt={user?.name} />
         <h3>Welcome {user?.name}, to your account page!</h3>
         <h5>Here are your details:</h5>
         <h6>Email: {user?.email}</h6>
         <h6>Address: {user?.address}</h6>
         <h6>Phone: {user?.phone}</h6>
      </div>
   );
}

export default Account;
