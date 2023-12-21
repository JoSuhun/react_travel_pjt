import './AccomEvent.css'

import React, { useState, useEffect } from "react";
import AccomItem from "./AccomItem";
import axios from "axios";


const AccomList = ({ area, siGunGu, APIKEY }) => {
  const [accomData, setAccomData] = useState([]);

  const getAccomData = async () => {
    const response = await axios.get(
      `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=${APIKEY}&_type=json&arrange=R&MobileOS=WIN&numOfRows=10&MobileApp=test&${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    setAccomData(response.data.response.body.items.item)
  };

  function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getTourData(lat, lon);
  }
  function onGeoError() {
    console.log("cant find you.");
  }

  const getTourData = async (lat, lon) => {
    const response = await fetch(
      // 위치 기반 관광 정보 조회 (한국관광공사_국문 관광정보 서비스_GW)
      `http://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=${APIKEY}&_type=json&MobileOS=WIN&numOfRows=10&MobileApp=test&arrange=S&contentTypeId=32&mapX=${lon}&mapY=${lat}&radius=20000`
    );
    const json = await response.json();
    setAccomData(json.response.body.items.item);
  };

  useEffect(() => {
    if (area&&siGunGu) {
      getAccomData()
    } else {
      navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
    }
  }, [area, siGunGu]);

  return (
    <div className="AccomList">
      <h1><span>Accommodations</span></h1>
      {accomData
      ?
      <div className='list-section'>
      {accomData.map((item)=>(
        <AccomItem key={item.contentid} {...item}/>
      ))}
      </div>
      :
      <div className='error_msg'>가능한 숙소가 없습니다</div>
      }

    </div>
  );
};

export default AccomList;