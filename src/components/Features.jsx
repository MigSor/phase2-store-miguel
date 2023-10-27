import React from "react";
import styles from "./Features.module.css";
import FeaturesCard from "./Card";
import warranty from "../assets/warranty.png";
import exchange from "../assets/exchange.png";
import payment from "../assets/credit-cards.png";
import delivery from "../assets/delivery.png";
function Features() {
   return (
      <div className={styles.wrapper}>
         <div className="heading">
            <h1>Buy from us with confidence</h1>
            <hr className={styles.hr} />
         </div>
         <div className={styles.cardDiv}>
            <FeaturesCard
               desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur est illum dicta suscipit veniam error?"
               title="Payment Methods"
               img={payment}
            />
            <FeaturesCard
               desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur est illum dicta suscipit veniam error?"
               title="Fast Delivery"
               img={delivery}
            />
            <FeaturesCard
               desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur est illum dicta suscipit veniam error?"
               title="30 day return"
               img={exchange}
            />
            <FeaturesCard
               desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur est illum dicta suscipit veniam error?"
               title="1 year warranty"
               img={warranty}
            />
         </div>
      </div>
   );
}

export default Features;
