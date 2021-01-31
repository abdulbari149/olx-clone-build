import React, { useContext } from "react";
import Product from "./Product";
import ProductExtras from "./ProductExtras";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const ProductCard = styled.div`
  height: 290px;
  min-width: 280px;
  position: relative;
  flex-basis: calc(100% / 4 - calc(10px * 2));
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const ProductLink = styled.a`
  height: 100%;
  max-width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
`;

function ProductList() {
  const { products, actions } = useContext(ProductContext);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.product_id}>
          <Link
            component={ProductLink}
            style={{ color: "black" }}
            to={`item/${product.product_id}`}
          >
            <Product key={product.product_id} product={product} date="today" />
          </Link>
          <ProductExtras
            product_id={product.product_id}
            extras={product.extras}
            likeProduct={actions.likeProduct}
          />
        </ProductCard>
      ))}
    </>
  );
}

export default React.memo(ProductList);
