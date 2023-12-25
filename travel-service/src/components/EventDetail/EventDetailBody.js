const EventDetailBody = ({event, event2}) => {
    return(
        <div className="EventDetailBody">
            <img className="event_image" src={event.firstimage} />
            <div className="event_info">
                <p><span>장소</span>{event2.eventplace} / {event.addr1}</p>
                <p><span>일자</span>{event2.eventstartdate} ~ {event2.eventenddate}</p>
                <div className="event_overview">{event.overview}</div>
                <p><span>문의</span>{event.tel} - {event.telname}</p>
            </div>
        </div>
    )
}

export default EventDetailBody