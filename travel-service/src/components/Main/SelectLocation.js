import React, { useState, useEffect } from "react";
import axios from "axios";
// 여행지 위치 선택 컴포넌트 (Main에서 지역1, 지역2 관련 변수와 함수를 props로 받아옴)

function SelectLocation({ area, siGunGu, setArea, setSiGunGu, APIKEY }) {
  const [areaList, setAreaList] = useState([]);
  const [siGunGuList, setsiGunGuList] = useState([]);

  // 지역 대분류 값 변경
  const updateArea = (event) => {
    !event.target.value ? setArea(null) : setArea(event.target.value);
  };

  // 지역 중분류 값 변경
  const updateSiGunGu = (event) => {
    !event.target.value ? setSiGunGu(null) : setSiGunGu(event.target.value);
  };

  // 지역 대분류 불러오는 함수
  const getAreaList = async () => {
    const response = await axios(
      `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${APIKEY}&numOfRows=100&MobileOS=WIN&MobileApp=test&_type=json`
    );
    setAreaList(response.data.response.body.items.item);
  };

  // 지역 중분류 값 불러오는 함수
  const getSiGunGuList = async () => {
    const response = await axios(
      `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${APIKEY}&numOfRows=100&areaCode=${area}&MobileOS=WIN&MobileApp=test&_type=json`
    );
    setsiGunGuList(response.data.response.body.items.item);
    setSiGunGu(null);
  };

  // 첫 렌더링 시 대분류 호출
  useEffect(() => {
    getAreaList();
  }, []);

  // 대분류 변경될 때 중분류 리스트 호출
  useEffect(() => {
    if (area != null) {
      getSiGunGuList();
    } else {
      setsiGunGuList([]);
    }
  }, [area]);

  return (
    <form>
      <label>
        지역1:
        <select onChange={updateArea}>
          <option value="">전체</option>
          {areaList.map((area) => {
            return (
              <option value={area.code} key={area.code}>
                {area.name}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        지역2:
        <select onChange={updateSiGunGu}>
          <option value="">전체</option>
          {siGunGuList.map((siGunGu) => {
            return (
              <option value={siGunGu.code} key={siGunGu.code}>
                {siGunGu.name}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
}

export default SelectLocation;
