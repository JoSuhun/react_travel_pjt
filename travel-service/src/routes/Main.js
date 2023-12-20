import React, { useState } from "react";
import AccomList from "../components/Main/AccomList";
import TourList from "../components/Main/TourList";
import SelectLocation from "../components/Main/SelectLocation";
import EventList from "../components/Main/EventList";

function Main() {
  const [area, setArea] = useState(null);
  const [siGunGu, setSiGunGu] = useState(null);
  const API_KEY =
    "wbGd%2F2atBr9%2Bic8bMAMxbtCv02LReGdl3YAVrEcZeqgEPMwoMuFmYDlH3m7D0lFZqzfwOV6A7CHEOHYukTDxHw%3D%3D";

  return (
    <div>
      <h3>안녕하세요?</h3>

      <SelectLocation
        setArea={setArea}
        setSiGunGu={setSiGunGu}
        area={area}
        siGunGu={siGunGu}
        APIKEY={API_KEY}
      />
      <EventList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />
      <AccomList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />

    </div>
  );
}

export default Main;
