import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  color: white;
  width: 100%;
  z-index: 10;
  height: 80px;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s linear;
`;

const Logo = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    font-weight: 700;
  }
`;

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgCondition, setBgCondition] = useState("none");

  // NavBar 배경색 변경 관련 함수
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition < 300) {
      setBgCondition("none");
    } else {
      setBgCondition("blur(10px) brightness(80%)");
    }
  }, [scrollPosition]);

  return (
    <Wrapper style={{ backdropFilter: bgCondition }}>
      <Logo>🐑</Logo>
      <Nav>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/keep">Keep</StyledLink>
        <p style={{ color: "white" }}>LINK3</p>
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
