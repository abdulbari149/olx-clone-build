import React, { useContext } from "react";
import { useProductSlider } from "../../hooks/useProductSlider";
import ProductList from "./ProductList";
import styles from "./ProductContainer.module.css";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowBackIos";
import { ProductContext } from "../../context/ProductContext";

function ProductContainer() {
  const { products } = useContext(ProductContext);
  const [slide, sliderFn] = useProductSlider(295.5, products);
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{ backgroundColor: "#dfdfdf", borderRadius: 5 }}
      >
        <h2 className={styles.heading}>More on Mobiles</h2>
        <div
          style={{
            transform: `translateX(-${slide}px)`,
            transition: `transform 700ms ease`,
          }}
          className={styles.slider}
        >
          <ProductList />
        </div>
        <div className={styles.sliderControls}>
          <Button
            className={styles.muibtn}
            onClick={(e) => {
              console.log("The functon moveLeft runs");
              sliderFn.moveLeft(e);
            }}
            disabled={slide === 0}
          >
            <ArrowForwardIosIcon />
          </Button>
          <Button
            className={styles.muibtn}
            onClick={(e) => {
              console.log("The functon moveRight runs");
              sliderFn.moveRight(e);
            }}
            disabled={slide / 295.5 === products.length - 4}
          >
            <ArrowBackIosIcon />
          </Button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Recommended Products</h2>
        <div className={styles.list}>
          <ProductList />
        </div>
        <button className={styles.btn}>Load more</button>
      </div>
    </div>
  );
}

export default ProductContainer;
