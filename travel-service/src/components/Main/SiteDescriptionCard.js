import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  opacity: 0;
  transition: opacity 2s ease;
  transition-delay: 0.1s;

  & > p {
    color: white;
    font-size: 36pt;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10px;
  }

  & > button {
    position: relative;
    margin-bottom: 50px;
    font-size: 18pt;
    font-weight: 300;
    font-style: italic;
    background-color: transparent;
    border: none;
    margin: none;
    color: white;
    cursor: pointer;

    &:before {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      max-width: 0;
      background-color: white;
      content: "";
      transition: all 0.1s linear;
    }

    &:hover:before {
      max-width: 100%;
    }
  }

  & > * {
    margin-left: 90px;
  }

  &:hover :nth-child(1) {
    margin-left: 40px;
    transition: all 1s linear;
    transition-delay: 0.2s;
  }
  &:hover :nth-child(2) {
    margin-left: 50px;
    transition: all 1s linear;
    transition-delay: 0.4s;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.$bgImg})`};
  background-size: cover;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-height: 0;
    background-color: ${(props) => props.color};
    transition: all 0.2s linear;
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  margin: 5px;

  position: relative;
  width: 32%;
  min-width: 300px;
  height: 70vh;
  min-height: 400px;

  &:hover ${ContentBox} {
    z-index: 1;
    opacity: 1;
  }

  &:hover ${ImageBox} {
    &:before {
      max-height: 100%;
    }
  }
`;

function SiteDescriptionCard({ bgImg, color, cat }) {
  const onClick = () => {
    alert("준비중입니다.");
  };
  return (
    <Wrapper color={color}>
      <ContentBox>
        <p>{cat}</p>
        <button onClick={onClick}>자세히 보기</button>
      </ContentBox>
      <ImageBox $bgImg={bgImg} color={color}></ImageBox>
    </Wrapper>
  );
}

export default SiteDescriptionCard;
