import './AccomList.css'

import React, { useState, useEffect } from "react";
import AccomItem from "./AccomItem";

const AccomList = ({ area, siGunGu, APIKEY }) => {
  const [accomData, setAccomData] = useState([]);

  const getAccomData = async () => {
    const response = await fetch(
      // 숙박 정보 조회
      `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=${APIKEY}&_type=json&MobileOS=WIN&numOfRows=100&MobileApp=test${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    const json = await response.json()
    setAccomData(json.response.body.items.item)
  };

  useEffect(() => {
    getAccomData()
    console.log(area, siGunGu)
  }, [area, siGunGu]);

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