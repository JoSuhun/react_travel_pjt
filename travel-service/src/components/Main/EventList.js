import './AccomEvent.css'

import React, { useState, useEffect } from "react";
import axios from "axios";
import EventListItem from "./EventListItem";


function EventList({ area, siGunGu, APIKEY }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [events, setEvents] = useState([])


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const updateEvent = async () => {
    const response = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${APIKEY}&numOfRows=10&MobileOS=WIN&MobileApp=test&_type=json&arrange=R&eventStartDate=20170901&${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    setEvents(response.data.response.body.items.item)
    setCurrentSlide(0)
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
    <div className='list_head'>
      <h1><span>Events / Festivals</span></h1>
    </div>
    {events
    ?
    <div className="carousel-container">
      <div className="carousel-slides">
        {events.map((event, index) => (
          <div
            key={event.contentid}
            className={`carousel-slide ${parseInt(index) === parseInt(currentSlide) ? 'active'
            : (parseInt(index) === parseInt(currentSlide)+1)||
              ((parseInt(currentSlide)+1===events.length)&&(parseInt(index) === 0)) ? 'next'
            : (parseInt(index) === parseInt(currentSlide)+2)||
              ((parseInt(currentSlide)+2===events.length)&&(parseInt(index) === 0))||
              ((parseInt(currentSlide)+1===events.length)&&(parseInt(index) === 1)) ? 'next_next'
            : (parseInt(index) === parseInt(currentSlide)+3)||
              ((parseInt(currentSlide)+3===events.length)&&(parseInt(index) === 0))||
              ((parseInt(currentSlide)+2===events.length)&&(parseInt(index) === 1))||
              ((parseInt(currentSlide)+1===events.length)&&(parseInt(index) === 2)) ? 'next_next_next'
            : ''}`}
          >
            <EventListItem
              key={event.contentid}
              id={event.contentid}
              title={event.title}
              imageUrl={event.firstimage}
              startAt={event.eventstartdate}
              endAt={event.eventenddate}
              addr1={event.addr1}
              addr2={event.addr2}
              tel={event.tel}
            />
          </div>
        ))}

      </div>
      <div className='btn_container'>
        <button className="carousel-button prev" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
        </button>
        <span><span className='now_slide'>{currentSlide+1}</span> / <span className='total_slide'>{events.length}</span></span>
        <button className="carousel-button next" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    </div>

    :
    <div className='error_msg'>예정된 행사가 없어요</div>
    }

    </div>

  );
}

export default EventList;
