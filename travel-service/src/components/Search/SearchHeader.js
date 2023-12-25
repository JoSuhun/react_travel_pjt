import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("/assets/event_image.jpg");
  background-size: cover;

  &:before {
    position: absolute;
    content: "검색하기";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28pt;
    color: white;
    background-color: rgb(0, 0, 0, 0.6);
  }
`;

function SearchHeader() {
  return <Wrapper>SearchHeader</Wrapper>;
}

export default SearchHeader;
