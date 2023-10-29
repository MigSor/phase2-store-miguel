import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./ProductModal.module.css";
function ProductModal() {
   const history = useHistory();
   const { state } = useLocation();
   const { category, description, image, price, rating, title } = state;
   console.log(state);
   console.log(history);

   return (
      <div className={styles.wrapper}>
         <div className={styles.modal}>
            <h5 className={styles.close} onClick={() => history.goBack()}>
               X
            </h5>
            <div className={styles.info}>
               <img src={image} alt={title} />
               <div className={styles.productInfo}>
                  <p>
                     <strong>Product:</strong> {title}
                  </p>
                  <p>
                     <strong>Description:</strong> {description}
                  </p>
                  <p>
                     <strong>Category:</strong> {category}
                  </p>
                  <p>
                     <strong>Rating:</strong> {rating.rate} stars
                  </p>
                  <p>
                     <strong>Price:</strong> ${price}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductModal;
