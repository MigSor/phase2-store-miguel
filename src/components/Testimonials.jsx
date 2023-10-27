import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import nextBtn from "../assets/nextBtn.png";
import prevBtn from "../assets/prevBtn.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

function Testimonials() {
   const data = [
      {
         img: user1,
         username: "some user1",
         reviews:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo architecto reprehenderit tempora harum aliquid eum. Dolorum consequatur quod dicta repudiandae?",
      },
      {
         img: user2,
         username: "some user2",
         reviews:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo architecto reprehenderit tempora harum aliquid eum. Dolorum consequatur quod dicta repudiandae?",
      },
      {
         img: user3,
         username: "some user3",
         reviews:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo architecto reprehenderit tempora harum aliquid eum. Dolorum consequatur quod dicta repudiandae?",
      },
   ];
   const [item, setItem] = useState(0);

   function nextItem() {
      if (item !== data.length - 1) {
         setItem(item + 1);
      }
   }

   function prevItem() {
      if (item !== 0) {
         setItem(item - 1);
      }
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.heading}>
            <h1>Testimonials</h1>
            <hr />
         </div>
         <div className={styles.body}>
            <button onClick={() => prevItem()}>
               <img src={prevBtn} alt="previous" />
            </button>
            <div className={styles.testimonials}>
               <img src={data[item]?.img} alt={data[item]?.username} />
               <h1>{data[item]?.username}</h1>
               <p>{data[item]?.reviews}</p>
            </div>

            <button onClick={() => nextItem()}>
               <img src={nextBtn} alt="next" />
            </button>
         </div>
      </div>
   );
}

export default Testimonials;
