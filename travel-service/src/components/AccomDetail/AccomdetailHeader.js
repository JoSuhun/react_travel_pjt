import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: ${(props) => `url(${props.$bgImg})`};
  background-size: cover;
  background-position: bottom;

  &:before {
    position: absolute;
    content: attr(data-title);
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

function AccomdetailHeader({ bgImg, title }) {
  return (
    <Wrapper
      $bgImg={bgImg == "" ? "/assets/accommodation_image.jpg" : bgImg}
      data-title={title}
    ></Wrapper>
  );
}

export default AccomdetailHeader;
