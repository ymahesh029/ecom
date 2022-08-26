import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin: 3px;
  height: 70vh;
  position: relative;
  justify-content: space-between;
`;
const Iamge = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItem = ({ item }) => {
  console.log("item", item);
  return (
    <Container>
      <Iamge src={item.img} />
      <Info>
        <Title> {item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
