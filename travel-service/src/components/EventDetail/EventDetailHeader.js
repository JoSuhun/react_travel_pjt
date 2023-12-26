const EventDetailHeader = ({event}) =>{
    return(
        <div className="EventDetailHeader">
            <h2>
            {event.title}
            </h2>
        </div>

    )
}

export default EventDetailHeader