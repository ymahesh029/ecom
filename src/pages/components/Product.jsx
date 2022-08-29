import React from "react";
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Conatiner = styled.div`
  background-color: #220e0e;
  display: flex;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  align-items: center;
`;
const Circle = styled.div`
  background-color: #1def1d
  padding: 200px;
  display: flex;

`;
const Images = styled.img`
  background-color: yellow;
  padding: 20px;
  display: flex;
  height: 75%;
`;
const Info = styled.div`
  background-color: yellow;
  padding: 20px;
  display: flex;
`;
const Icon = styled.div`
  background-color: yellow;
  padding: 20px;
  display: flex;
`;

const Product = ({ item }) => {
  return (
    <Conatiner>
      {/* {item.id}
      {item.img} */}
      <Circle />
      <Images src={item.img} />
      <Info>
        <Icon>
          {" "}
          <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          {" "}
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />{" "}
        </Icon>
      </Info>
    </Conatiner>
  );
};

export default Product;
