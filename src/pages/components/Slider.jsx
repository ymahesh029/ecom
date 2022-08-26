import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderItems } from "../../Data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* position: relative; */

  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Warpper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slidIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImagesContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoConatiner = styled.div`
  height: 100%;
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const initialState = 0;
  const [slidIndex, setSlidInex] = useState(initialState);

  const handleclick = (direction) => {
    if (direction === "left") {
      //   alert();
      setSlidInex(slidIndex > 0 ? slidIndex - 1 : 2);
    } else {
      setSlidInex(slidIndex < 2 ? slidIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Warpper slidIndex={slidIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImagesContainer>
              <Image src={item.img} />{" "}
            </ImagesContainer>
            <InfoConatiner>
              <Title> {item.title}</Title>
              <Desc> {item.desc}</Desc>
              <Button> SHOP NOW</Button>
            </InfoConatiner>
          </Slide>
        ))}
      </Warpper>
      <Arrow direction="right" onClick={() => handleclick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
