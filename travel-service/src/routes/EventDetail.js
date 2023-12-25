import '../components/EventDetail/EventDetail.css'

import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom";

import axios from "axios";

import MainBanner from "../components/Main/MainBanner";
import EventDetailHeader from "../components/EventDetail/EventDetailHeader";
import EventDetailBody from '../components/EventDetail/EventDetailBody';

const API_KEY =
"wbGd%2F2atBr9%2Bic8bMAMxbtCv02LReGdl3YAVrEcZeqgEPMwoMuFmYDlH3m7D0lFZqzfwOV6A7CHEOHYukTDxHw%3D%3D";

const EventDetail = () => {
    const {id} = useParams()
    const [event, setEvent] = useState([])
    const [event2, setEvent2] = useState([])
    const [event3, setEvent3] = useState([])

    const updateDetail = async () => {
        const response = await axios.get(
            `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${API_KEY}&MobileOS=WIN&MobileApp=test&_type=json&contentId=${id}&contentTypeId=15&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=1&pageNo=1`
          );
        setEvent(response.data.response.body.items.item[0])
        console.log(response.data.response.body.items.item[0])

        const response2 = await axios.get(
            `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${API_KEY}&MobileOS=WIN&MobileApp=test&_type=json&contentId=${id}&contentTypeId=15&numOfRows=1&pageNo=1`
        )
        setEvent2(response2.data.response.body.items.item[0])
        console.log(response2.data.response.body.items.item[0])

        // const response3 = await axios.get(
        //     `https://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=${API_KEY}&MobileOS=WIN&MobileApp=test&_type=json&contentId=${id}&contentTypeId=15&numOfRows=1&pageNo=1`
        // )
        // setEvent3(response3.data.response.body.items.item[0])
        // console.log(response3.data.response.body.items.item[0])
      };


    useEffect(()=>{
        updateDetail()
    }, [])

    return(
        <div>
            <MainBanner APIKEY={API_KEY} />
            <div className='EventDetail'>
            <EventDetailHeader event={event} event2={event2}/>
            <EventDetailBody event={event} event2={event2}/>
            </div>

        </div>
    )
}

export default EventDetail