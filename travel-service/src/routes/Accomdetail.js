import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "../App";
import axios from "axios";
import AccomdetailHeader from "../components/AccomDetail/AccomdetailHeader";
import AccomdetailBody from "../components/AccomDetail/AccomdetailBody";

function Accomdetail() {
  const [accom1, setAccom1] = useState([]);
  const [accom2, setAccom2] = useState([]);
  const [accom3, setAccom3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const API_KEY = React.useContext(APIContext);

  const getDetail1 = async () => {
    const json = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${API_KEY}&MobileOS=WIN&MobileApp=test&_type=json&contentId=${params.id}&contentTypeId=32&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=1&pageNo=1`
    );
    setAccom1(json.data.response.body.items.item[0]);
  };

  const getDetail2 = async () => {
    const json = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=${API_KEY}&MobileOS=WIN&MobileApp=test&_type=json&contentId=${params.id}&contentTypeId=32&numOfRows=100&pageNo=1`
    );
    json.data.response.body.items != ""
      ? setAccom2(json.data.response.body.items.item)
      : setAccom2(null);
  };

  const getDetail3 = async () => {
    const json = await axios.get(
      `https://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${params.id}&_type=json`
    );
    json.data.response.body.items != ""
      ? setAccom3(json.data.response.body.items.item[0])
      : setAccom3(null);
  };

  useEffect(() => {
    getDetail1();
    getDetail2();
    getDetail3();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? null : (
        <div>
          <AccomdetailHeader bgImg={accom1.firstimage} title={accom1.title} />
          <AccomdetailBody accom1={accom1} accom2={accom2} accom3={accom3} />
        </div>
      )}
    </div>
  );
}

export default Accomdetail;
