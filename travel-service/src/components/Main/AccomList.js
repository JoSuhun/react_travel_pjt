import './AccomList.css'

import React, { useState, useEffect } from "react";
import AccomItem from "./AccomItem";
import axios from "axios";


const AccomList = ({ area, siGunGu, APIKEY }) => {
  const [accomData, setAccomData] = useState([]);

  const getAccomData = async () => {
    const response = await axios.get(
      // 숙박 정보 조회
      `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=${APIKEY}&_type=json&arrange=R&MobileOS=WIN&numOfRows=100&MobileApp=test&${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    setAccomData(response.data.response.body.items.item)
  };

  useEffect(() => {
    getAccomData()
  }, [area, siGunGu]);
  
  return (
    <div className="AccomList">
      <h1>숙박 리스트</h1>
      <div className='list-section'>
      {accomData.map((item)=>(
        <AccomItem key={item.contentid} {...item}/>
      ))}
      </div>

    </div>
  );
};

export default AccomList;