const EventDetailHeader = ({event}) =>{
    return(
        <div className="EventDetailHeader">
            {/* <img src="/assets/event_image.jpg" /> */}
            <h2>
            {event.title}
            </h2>
        </div>

    )
}

export default EventDetailHeader