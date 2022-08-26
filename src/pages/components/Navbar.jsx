import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; // import SearchIcon from "@mui/icons-material/Search";
const Container = styled.div`
  height: 60px;
`;
const Wrap = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-top: 0px;
  padding: 5px;
  width: 250px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            {/* <input type="text" /> */}
            <Input />
            {/* <SearchIcon /> */}
            search
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Logo>Lamba</Logo>
        </Center>
        <Right>
          {" "}
          <Menu>REGISTER</Menu>
          <Menu>sig in </Menu>
          <Menu>
            {" "}
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </Menu>
        </Right>
      </Wrap>
    </Container>
  );
};

export default Navbar;
