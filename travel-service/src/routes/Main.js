import React from "react";
import AccomList from "../components/Main/AccomList";
import TourList from "../components/Main/TourList";

function Main() {
  return (
    <div>
      <h3>안녕하세요?</h3>
      <TourList />

      <AccomList />
    </div>
  );
}

export default Main;
