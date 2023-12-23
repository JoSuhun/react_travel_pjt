import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 200px);
  padding: 10px;
  display: flex;
`;

const ImgBox = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

const RoomImg = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
  transform: ${(props) => `translateX(${props.$transX}px)`};
  transition: all 0.2s ease;
`;

const ImgInnerBox = styled.div`
  width: 400px;
  height: 250px;
`;

const NavBtn = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: rgb(255, 255, 255, 0.6);
  border-radius: 50%;
  bottom: 10px;
  left: ${(props) => `${165 + 15 * props.$num}px`};
  z-index: 1;

  &.active {
    background-color: white;
  }
`;

const DesBox = styled.div`
  padding: 0 30px;
  width: calc(100% - 460px);
`;

function AccomdetailCard({ room }) {
  const [transX, setTransX] = useState(0);
  const [focused, setFocused] = useState(1);
  const amenities = [
    "roombathfacility",
    "roombath",
    "roomhometheater",
    "roomaircondition",
    "roomtv",
    "roompc",
    "roomcable",
    "roominternet",
    "roomrefrigerator",
    "roomtoiletries",
    "roomsofa",
    "roomcook",
    "roomtable",
    "roomhairdryer",
  ];

  const amenitieskr = [
    "샤워실",
    "욕조",
    "홈시어터",
    "에어컨",
    "TV",
    "PC",
    "케이블",
    "인터넷",
    "냉장고",
    "아메니티",
    "소파",
    "조리도구",
    "테이블",
    "헤어드라이어",
  ];

  const nextImg = (num) => {
    setTransX((num - 1) * -400);
    setFocused(num);
  };
  return (
    <Wrapper>
      <ImgBox>
        {[1, 2, 3, 4, 5].map((num) => {
          return num > 1 && room[`roomimg${num}`] == "" ? null : (
            <ImgInnerBox key={num}>
              <NavBtn
                $num={num}
                onClick={() => {
                  nextImg(num);
                }}
                className={num == focused ? "active" : null}
              />
              <RoomImg
                $transX={transX}
                src={
                  room[`roomimg${num}`] == ""
                    ? "/assets/room_image.jpg"
                    : room[`roomimg${num}`]
                }
                alt={room[`roomimg${num}alt`]}
              />
            </ImgInnerBox>
          );
        })}
      </ImgBox>
      <DesBox>
        <h3>{room.roomtitle}</h3>
        {room.roomoffseasonminfee1 > 0 ? (
          <p>이용 요금: {room.roomoffseasonminfee1}원</p>
        ) : (
          <p>이용 요금: 숙소에 문의</p>
        )}
        <p>
          편의시설:{" "}
          {amenities.map((each, index) =>
            room[each] == "Y" ? (
              <span key={index}>{amenitieskr[index]} </span>
            ) : null
          )}
        </p>
        <p>{room.roomintro}</p>
      </DesBox>
    </Wrapper>
  );
}

export default AccomdetailCard;
