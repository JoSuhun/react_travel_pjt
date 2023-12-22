import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import "./AccomEvent.css";

// 전체 배너
const Wrapper = styled.div`
  position: relative;
  width: 99%;
  height: 90vh;
  overflow: hidden;
  background-color: lightgray;
  border-bottom-right-radius: 250px;
  min-height: 600px;
`;

// 배너 이미지 위 그라데이션
const CoverBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(to right, rgb(0, 0, 0, 0.6), transparent);
  z-index: 1;
`;

// 이벤트명 등 상세 설명
const DescriptionBox = styled.div`
  width: fit-content;
  margin-left: 80px;
  margin-top: 250px;

  & > h1 {
    font-size: 32pt;
    color: white;
    margin-bottom: 20px;
  }

  & > p {
    line-height: 0;
    color: white;
  }
`;

// 자세히보기 버튼
const StyledButton = styled.div`
  background-color: transparent;
  color: white;
  width: 100px;
  padding: 10px 15px;
  border-radius: 10pt;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// 화살표 버튼 (~Arrow)
const GoDown = styled.div`
  width: 20px;
  height: 40px;
  border: 4px solid white;
  border-radius: 50px;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 25px);
  right: calc(50% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovingArrow = keyframes`
0% {
  transform: translateY(-10%);
}
50% {
  transform: translateY(10%);
}
100% {
  transform: translateY(-10%);
}
`;

const Arrow = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 8pt;
  animation: ${MovingArrow} 1s linear infinite;
`;

// 슬라이드 이미지 관련 (~SlideImg)
const ImgScale = keyframes`
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(103%) translateX(-10px);
  }
  100% {
    transform: scale(105%) translateX(-20px);
  }
`;

const SlideImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${ImgScale} 10s infinite linear;
  transition: all 0.5s;
`;

function MainBanner({ APIKEY }) {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  let now = 0;

  const onClick = () => {
    alert("준비중입니다.");
  };

  const getEvents = async () => {
    const json = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${APIKEY}&numOfRows=3&pageNo=1&MobileOS=WIN&MobileApp=test&_type=json&listYN=Y&arrange=Q&contentTypeId=25`
    );
    setEvents(json.data.response.body.items.item);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    setCurrentEvent(events[0]);
    if (events.length > 0) {
      clearInterval();
      setInterval(() => {
        now < 2 ? (now += 1) : (now = 0);
        setCurrentEvent(events[now]);
      }, 10000);
    }
  }, [events]);

  return !currentEvent ? (
    <Wrapper></Wrapper>
  ) : (
    <Wrapper id="mainBanner">
      <CoverBox>
        <DescriptionBox>
          <p>픽업 국내여행 TOP3</p>
          <h1>{currentEvent.title}</h1>
          <StyledButton onClick={onClick}>자세히 보기</StyledButton>
        </DescriptionBox>
        <a href="#move-down-btn">
          <GoDown id="move-down-btn">
            <Arrow>▼</Arrow>
          </GoDown>
        </a>
      </CoverBox>
      <SlideImg src={currentEvent.firstimage} />
    </Wrapper>
  );
}

export default MainBanner;
