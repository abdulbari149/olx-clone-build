import styles from "./Product.module.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavouriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

const likeBtnStyles = {
  fontSize: 27,
  color: "black",
  fontWeight: "bold",
};
function ProductExtras({ product_id, extras, likeProduct }) {
  return (
    <>
      <div className={styles.extras}>
        <IconButton onClick={() => likeProduct(product_id)}>
          {extras.like ? (
            <FavouriteIcon style={likeBtnStyles} />
          ) : (
            <FavoriteBorderIcon style={likeBtnStyles} />
          )}
        </IconButton>
      </div>
      {extras.featured && (
        <div className={styles.featured}>
          <label>
            <span> Featured </span>
          </label>
          <span className={styles.line}></span>
        </div>
      )}
    </>
  );
}

export default ProductExtras;
