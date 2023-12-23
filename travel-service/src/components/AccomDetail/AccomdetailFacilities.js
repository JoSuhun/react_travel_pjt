import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & > h2 {
    margin-bottom: 20px;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > li {
    width: 50%;
    margin: 10px 0;
  }
`;

function AccomdetailFacilities({ accom }) {
  const facilities = [
    "parking",
    "route",
    "publictransport",
    "ticketoffice",
    "promotion",
    "wheelchair",
    "exit",
    "elevator",
    "restroom",
    "auditorium",
    "room",
    "handicapetc",
    "braileblock",
    "helpdog",
    "guidehuman",
    "audioguide",
    "bigprint",
    "brailepromotion",
    "guidesystem",
    "blindhandicapetc",
    "signguide",
    "videoguide",
    "hearingroom",
    "hearinghandicapetc",
    "stroller",
    "lactationroom",
    "babysparechair",
    "infantsfamilyetc",
  ];
  return accom ? (
    <Wrapper>
      <h2>편의시설</h2>
      <InnerBox>
        {facilities.map((each, index) => {
          return accom[each] == "" ? null : <li key={index}>{accom[each]}</li>;
        })}
      </InnerBox>
    </Wrapper>
  ) : null;
}

export default AccomdetailFacilities;
