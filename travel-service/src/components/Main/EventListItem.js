import './AccomEvent.css'

import React from "react";
import styled from "styled-components";


function EventListItem({ title, imageUrl, startAt, endAt, addr1, addr2, tel }) {
  return (
    <div className="EventListItem">
      <img className='event_image' src={imageUrl} alt={title} />
      <div className='event_text_box'>
        <p style={{ fontSize: "26pt", fontWeight: "700" }}>
          {title}
        </p>
        <p>
          {startAt} ~ {endAt}
        </p>
        <p>{addr1}</p>
        <p>{addr2}</p>
        <p>{tel}</p>
      </div>
    </div>
  );
}

export default EventListItem;
