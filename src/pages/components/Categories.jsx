import React from "react";
import styled from "styled-components";
// import { Categories } from "../../Data";
// import { CategoriesItem } from "./CategoriesItem";
import { Categories } from "../../Data";
import CategoriesItem from "./CategoriesItem";
const Container = styled.div`
  display: flex;
`;

const Categorie = () => {
  return (
    <Container>
      {Categories.map((item) => (
        <CategoriesItem item={item} />
      ))}
    </Container>
  );
};

export default Categorie;
