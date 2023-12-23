import React from "react";
import styled from "styled-components";
import AccomdetailCard from "./AccomdetailCard";
import AccomdetailFacilities from "./AccomdetailFacilities";

const Wrapper = styled.div`
  width: calc(100% - 200px);
  padding: 50px 100px;
  display: flex;
  flex-direction: column;

  & > h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
`;

const HotelImg = styled.img`
  width: 35%;
  min-width: 400px;
  object-fit: cover;
`;

const HotelDetail = styled.div`
  width: calc(60% - 100px);
  padding: 0 50px;

  & > p {
    line-height: 1.5;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: lightgrey;
`;

function AccomdetailBody({ accom1, accom2, accom3 }) {
  return (
    <Wrapper>
      <InnerBox>
        <HotelImg
          src={
            accom1.firstimage == ""
              ? "/assets/accommodation_image.jpg"
              : accom1.firstimage
          }
          alt={accom1.title}
        />
        <HotelDetail>
          <h1>{accom1.title}</h1>
          <Border />
          <p>
            주소: {accom1.addr1} {accom1.addr2}
          </p>
          <p>전화번호: {accom1.tel}</p>
          {!accom1.homepage ||
          accom1.homepage == "" ? null : accom1.homepage.startsWith(
              "<a href"
            ) ? (
            <p>
              홈페이지:{" "}
              <span
                dangerouslySetInnerHTML={{ __html: accom1.homepage }}
              ></span>
            </p>
          ) : (
            <p>
              홈페이지: <a href={accom1.homepage}>{accom1.homepage}</a>
            </p>
          )}
          <p>{accom1.overview}</p>
        </HotelDetail>
      </InnerBox>
      <Border />
      <AccomdetailFacilities accom={accom3} />
      {accom2 ? (
        <div>
          <Border />
          <h1>객실 리스트</h1>
          {accom2.map((room) => (
            <div key={room.roomcode}>
              <AccomdetailCard room={room} />
              <Border />
            </div>
          ))}
        </div>
      ) : null}
    </Wrapper>
  );
}

export default AccomdetailBody;
