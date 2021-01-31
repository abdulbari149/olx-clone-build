import React, { createContext, useReducer } from "react";
import productsData from "../data/products";
import { productReducer, LIKE_PRODUCT } from "../reducer/productReducer";
export const ProductContext = createContext(productsData);

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, productsData);

  const likeProduct = (productId) =>
    dispatch({ type: LIKE_PRODUCT, productId });

  return (
    <ProductContext.Provider
      value={{
        products,
        actions: {
          likeProduct,
        },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
