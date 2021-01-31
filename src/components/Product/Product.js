import React from "react";
import styles from "./Product.module.css";



function Product({ product, date }) {
  return (
    <>
      <div className={styles.product__image}>
        <img src={product.imagesURL[0]} alt="" />
      </div>
      <div className={styles.product__info}>
        <h3>Rs {product.price}</h3>
        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}
        <p>
          {product.title.length >= 50
            ? `${product.title.slice(0, 19)}...`
            : product.title}
        </p>
        <div className={styles.product__details}>
          <span>{`${product.location.city},${product.location.province}`}</span>
          <span>{date}</span>
        </div>
      </div>
    </>
  );
}


export default Product;
