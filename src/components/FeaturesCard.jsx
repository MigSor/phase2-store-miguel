import styles from "./FeaturesCard.module.css";
function FeaturesCard({ desc, title, img }) {
   return (
      <div className={styles.cardWrapper}>
         <img src={img} alt={title} />
         <h3>{title}</h3>
         <p>{desc}</p>
      </div>
   );
}

export default FeaturesCard;
