import React, { useState, useEffect } from "react";

const TourList = ({APIKEY}) => {
  const [tourData, setTourData] = useState([]);

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
    setTourData(json.response.body.items.item);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
  }, []);

  return (
    <div>
      <h1>Tour List</h1>
      <ul>
        {tourData.map((item) => (
          <li key={item.contentid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TourList;
