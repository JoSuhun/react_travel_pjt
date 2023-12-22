import React, { useState } from "react";

import AccomList from "../components/Main/AccomList";
import SelectLocation from "../components/Main/SelectLocation";
import EventList from "../components/Main/EventList";
import MainBanner from "../components/Main/MainBanner";
import SiteDescription from "../components/Main/SiteDescription";

function Main() {
  const [area, setArea] = useState(null);
  const [siGunGu, setSiGunGu] = useState(null);
  const API_KEY =
    "wbGd%2F2atBr9%2Bic8bMAMxbtCv02LReGdl3YAVrEcZeqgEPMwoMuFmYDlH3m7D0lFZqzfwOV6A7CHEOHYukTDxHw%3D%3D";

  return (
    <div>
      <MainBanner APIKEY={API_KEY} />
      <SiteDescription />
      <SelectLocation
        setArea={setArea}
        setSiGunGu={setSiGunGu}
        area={area}
        siGunGu={siGunGu}
        APIKEY={API_KEY}
      />
      <EventList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />
      <AccomList />
      <EventList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />
      <AccomList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />
    </div>
  );
}

export default Main;
