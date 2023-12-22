import React from "react";
import styled from "styled-components";
import SiteDescriptionCard from "./SiteDescriptionCard";

const Wrapper = styled.div`
  padding: 0px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24pt;
  font-weight: 300;
`;

const CardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  & > :nth-child(odd) {
    margin-top: 30px;
  }
`;

function SiteDescription() {
  return (
    <Wrapper>
      <TitleBox>AppName에서 특별한 여행을 즐겨보세요</TitleBox>
      <CardList>
        <SiteDescriptionCard
          bgImg="./images/desc1.jpg"
          color="#7344DB"
          cat="숙소"
        />
        <SiteDescriptionCard
          bgImg="./images/desc2.jpg"
          color="#00482C"
          cat="관광지"
        />
        <SiteDescriptionCard
          bgImg="./images/desc3.jpg"
          color="#BA116E"
          cat="교통편"
        />
      </CardList>
    </Wrapper>
  );
}

export default SiteDescription;
