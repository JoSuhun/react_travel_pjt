import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  margin: 10px 20px;
  width: 20%;
  aspect-ratio: 1 / 1;
  position: relative;
  @media screen and (max-width: 992px) {
    width: 45%;
  }
  @media screen and (max-width: 576) {
    width: 100%;
  }
`;

const EventImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;

  &:hover {
    opacity: 1;
  }
`;

const Description = styled.div`
  font-weight: 300;
  margin: 5px 10px;
`;

function EventListItem({ title, imageUrl, startAt, endAt, addr1, addr2, tel }) {
  return (
    <Wrapper>
      <EventImage src={imageUrl} alt={title} />
      <TextBox>
        <Description style={{ fontSize: "26pt", fontWeight: "700" }}>
          {title}
        </Description>
        <Description>
          {startAt} ~ {endAt}
        </Description>
        <Description>{addr1}</Description>
        <Description>{addr2}</Description>
        <Description>{tel}</Description>
      </TextBox>
    </Wrapper>
  );
}

export default EventListItem;
