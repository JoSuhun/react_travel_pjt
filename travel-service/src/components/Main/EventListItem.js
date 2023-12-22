import './AccomEvent.css'

import React from "react";

function EventListItem({ title, id, imageUrl, startAt, endAt, addr1, addr2, tel }) {
  const defaultImage = process.env.PUBLIC_URL + `/assets/event_image.jpg`
  return (
    <div className="EventListItem">
      <img className='event_image' src={imageUrl?imageUrl:defaultImage} alt={title} />
      <div className='event_text_box'>
        <div>
          <p className='event_title'>
            {title}
          </p>
        </div>
        <div>
          <p>
            {startAt} ~ {endAt}
          </p>
          <p>{addr1}</p>
          <p>{addr2}</p>
          <p>{tel}</p>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
