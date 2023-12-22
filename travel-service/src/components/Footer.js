import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 500px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return <Wrapper>footer</Wrapper>;
}

export default Footer;
