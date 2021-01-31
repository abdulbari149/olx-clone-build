export const LIKE_PRODUCT = "LIKE_PRODUCT";

const likeProduct = (productId, products) => {
  const newProducts = [...products];

  const updateProductIndex = newProducts.findIndex(
    (product) => product.product_id === productId
  );

  newProducts[updateProductIndex].extras.like = !newProducts[updateProductIndex].extras.like;

  return [...newProducts];
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case LIKE_PRODUCT:
      return likeProduct(action.productId, state);
    default:
      return state;
  }
};
