import styles from "./Card.module.css";
function FeaturesCard({ desc, title, img, btnText, addToFavorites, deleteFavorite, goToProductDetails }) {
   return (
      <div className={styles.cardWrapper} onClick={goToProductDetails}>
         <img src={img} alt={title} />
         <h6>{title}</h6>
         <p>{desc}</p>
         {btnText && <button onClick={btnText === "Add to favorites" ? addToFavorites : deleteFavorite}>{btnText}</button>}
      </div>
   );
}

export default FeaturesCard;
