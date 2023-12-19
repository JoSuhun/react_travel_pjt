import './AccomList.css'

import React, { useState, useEffect } from "react";
import AccomItem from "./AccomItem";

const AccomList = () => {
  const [accomData, setAccomData] = useState([]);

  const API_KEY =
    "wbGd%2F2atBr9%2Bic8bMAMxbtCv02LReGdl3YAVrEcZeqgEPMwoMuFmYDlH3m7D0lFZqzfwOV6A7CHEOHYukTDxHw%3D%3D";

  const getAccomData = async () => {
    const response = await fetch(
      // 숙박 정보 조회
      `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=${API_KEY}&_type=json&MobileOS=WIN&numOfRows=100&MobileApp=test`
    );
    const json = await response.json()
    setAccomData(json.response.body.items.item)
  };

  useEffect(() => {
    getAccomData()
  }, []);

  return (
    <div className="AccomList">
      <h1>숙박 리스트</h1>
      <div className='list-section'>
      {accomData.slice(0, 20).map((item)=>(
        item.firstimage && <AccomItem key={item.contentid} {...item}/>
      ))}
      </div>

    </div>
  );
};

export default AccomList;