import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import FeaturesCard from "../components/Card";

function Products() {
   const [products, setProducts] = useState([]);
   const [favorites, setFavourites] = useState([]);

   useEffect(() => {
      fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   useEffect(() => {
      fetch(" http://localhost:3000/favorites")
         .then((res) => res.json())
         .then((data) => setFavourites(data));
   }, []);

   function addToFavorites(product) {
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(product),
      };
      fetch("http://localhost:3000/favorites", options)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setFavourites([...favorites, data]);
         });
   }

   function deleteFavorite(favorite) {
      console.log(favorite);
      fetch(`http://localhost:3000/favorites/${favorite.id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then(() =>
            fetch(" http://localhost:3000/favorites")
               .then((res) => res.json())
               .then((data) => setFavourites(data))
         );
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.sidebar}>
            <h3>Favourites</h3>
            <ul>
               {favorites?.map((favorite) => {
                  return <li key={favorite.id}>{favorite.title}</li>;
               })}
            </ul>
         </div>
         <div className={styles.products}>
            {products?.map((product) => {
               return (
                  <>
                     <FeaturesCard
                        key={product.id}
                        title={product.title}
                        img={product.image}
                        btnText={favorites.find((favorite) => favorite.title === product.title) ? "Remove from favorites" : "Add to favorites"}
                        addToFavorites={() => addToFavorites(product)}
                        deleteFavorite={() => deleteFavorite(product)}
                     />
                  </>
               );
            })}
         </div>
      </div>
   );
}

export default Products;
