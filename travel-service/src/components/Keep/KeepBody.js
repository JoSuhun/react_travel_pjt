import { useContext, useEffect, useState } from "react"
import { KeepStateContext } from "../../App"
import KeepCard from "./KeepCard"
const KeepBody = () =>{
    const [accomList, setAccomList] = useState()
    const [eventList, setEventList] = useState()
    const {keepAccomData, keepEventData} = useContext(KeepStateContext)
    const AccomLocalData = localStorage.getItem('accommodation')
    const EventLocalData = localStorage.getItem('event')
    useEffect(()=>{
        if (AccomLocalData) {
            const accoms = JSON.parse(AccomLocalData)
            setAccomList(accoms)
        if (EventLocalData){
            const events = JSON.parse(EventLocalData)
            setEventList(events)
        }
    }
    }, [keepAccomData, keepEventData])

    return(
        <div className="KeepBody">
            <h2>Events/Festivals</h2>
            <div className="container">
                {eventList?
                eventList.map((it)=> (
                <KeepCard key={it.id} {...it}/>
                ))
                : ""
                }
            </div>

            <h2>Accommodations</h2>
            <div className="container">
                {accomList?
                accomList.map((it)=> (
                <KeepCard key={it.id} {...it}/>
                ))
                : ""
                }
            </div>
        </div>
    )
}

export default KeepBody