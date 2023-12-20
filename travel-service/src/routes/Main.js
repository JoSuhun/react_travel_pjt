import React, { useState } from "react";
import AccomList from "../components/Main/AccomList";
import TourList from "../components/Main/TourList";
import SelectLocation from "../components/Main/SelectLocation";
import EventList from "../components/Main/EventList";
import MainBanner from "../components/Main/MainBanner";
import SiteDescription from "../components/Main/SiteDescription";

function Main() {
  const [area, setArea] = useState(null);
  const [siGunGu, setSiGunGu] = useState(null);
  const API_KEY =
    "p%2FlaNOV0RM5G19AFrkR%2BR%2BgM8RCHbGWehQrAS7OryZo46ArT%2FTqEBW%2BNJPckAiCMQeJHtyH71TLtvdejdKOGYw%3D%3D";

  return (
    <div>
      <MainBanner APIKEY={API_KEY} />
      <SiteDescription />
      {/* <SelectLocation
        setArea={setArea}
        setSiGunGu={setSiGunGu}
        area={area}
        siGunGu={siGunGu}
        APIKEY={API_KEY}
      />
      <EventList area={area} siGunGu={siGunGu} APIKEY={API_KEY} /> */}
      <TourList />
      <AccomList />
    </div>
  );
}

export default Main;
