// import { useContext } from 'react';
// import { KeepContext } from '../../App';

const EventDetailBody = ({event, event2}) => {
//   const {onKeepAccom, onKeepEvent} = useContext(KeepContext)

    return(
        <div className="EventDetailBody">
            <img className="event_image" src={event.firstimage} />
            <div className="event_info">
                <p>{event.title}
                {/* <button
                onClick={onKeepEvent(event.firstimage, event.title, event.tel, event.addr1)}>저장</button> */}
                </p>
                <p><span>장소</span>{event2.eventplace} / {event.addr1}</p>
                <p><span>일자</span>{event2.eventstartdate} ~ {event2.eventenddate}</p>
                <div className="event_overview">{event.overview}</div>
                <p><span>문의</span>{event.tel} - {event.telname}</p>
            </div>
        </div>
    )
}

export default EventDetailBody