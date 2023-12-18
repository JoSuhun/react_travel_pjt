// src/components/TourismList.js
import React, { useState, useEffect } from 'react';

const TourList = () => {
    const [tourData, setTourData] = useState([])

    const API_KEY = 'wbGd%2F2atBr9%2Bic8bMAMxbtCv02LReGdl3YAVrEcZeqgEPMwoMuFmYDlH3m7D0lFZqzfwOV6A7CHEOHYukTDxHw%3D%3D'

    function onGeoOK(position){
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        getTourData(lat, lon)
    }
    function onGeoError() {
        console.log('cant find you.')
    }

    const getTourData = async (lat, lon) => {
        const response = await fetch(
            // 위치 기반 관광 정보 조회 (한국관광공사_국문 관광정보 서비스_GW)
            `http://apis.data.go.kr/B551011/KorService/locationBasedList?serviceKey=${API_KEY}&_type=json&MobileOS=WIN&numOfRows=100&MobileApp=test&mapX=${lon}&mapY=${lat}&radius=10000`
        );
        const json = await response.json()
        console.log(json.response.body.items.item)
        setTourData(json.response.body.items.item)
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)

    }, [])

    return (
    <div>
        <h1>Tourism List</h1>
        <ul>
        {tourData.map((item) => (
          <li key={item.contentid}>{item.title}</li>
        ))}
        </ul>
    </div>
    );
};

export default TourList;
