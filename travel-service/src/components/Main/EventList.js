import React, { useState, useEffect } from "react";
import axios from "axios";
import EventListItem from "./EventListItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function EventList({ area, siGunGu, APIKEY }) {
  const [events, setEvents] = useState([]);

  const updateEvent = async () => {
    const response = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${APIKEY}&numOfRows=100&MobileOS=WIN&MobileApp=test&_type=json&eventStartDate=20170901&${
        area ? `areaCode=${area}` : ""
      }${siGunGu ? `&sigunguCode=${siGunGu}` : ""}`
    );
    setEvents(response.data.response.body.items.item);
  };

  useEffect(() => {
    updateEvent();
  }, [area, siGunGu]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default EventList;
