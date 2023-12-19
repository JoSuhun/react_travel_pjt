import './AccomEvent.css'

import React, { useState, useEffect } from "react";
import axios from "axios";
import EventListItem from "./EventListItem";
// import styled from "styled-components";

function EventList({ area, siGunGu, APIKEY }) {
  const [events, setEvents] = useState([]);

  const updateEvent = async () => {
    const response = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${APIKEY}&numOfRows=100&MobileOS=WIN&MobileApp=test&_type=json&arrange=R&eventStartDate=20170901&${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    setEvents(response.data.response.body.items.item);
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
      `http://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=${APIKEY}&_type=json&MobileOS=WIN&numOfRows=10&MobileApp=test&arrange=R&contentTypeId=15&mapX=${lon}&mapY=${lat}&radius=20000`
    );
    const json = await response.json();
    setEvents(json.response.body.items.item);
  };

  useEffect(() => {
    if (area&&siGunGu) {
      updateEvent()
    } else {
      navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
    }
  }, [area, siGunGu]);

  return (
    <div className="EventList">
      {!events ? (
        <p>예정된 행사가 없습니다.</p>
      ) : (
        events.map((event) => {
          return (
            <EventListItem
              key={event.contentid}
              title={event.title}
              imageUrl={event.firstimage}
              startAt={event.eventstartdate}
              endAt={event.eventenddate}
              addr1={event.addr1}
              addr2={event.addr2}
              tel={event.tel}
            />
          );
        })
      )}
    </div>
  );
}

export default EventList;
