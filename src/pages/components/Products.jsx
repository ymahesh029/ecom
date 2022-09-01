import React from "react";
import { popularProducts } from "../../Data";
import styled from "styled-components";
import Product from "./Product";

const Conatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Conatiner>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Conatiner>
  );
};

export default Products;
