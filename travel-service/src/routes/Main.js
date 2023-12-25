import React, { useState } from "react";
import { APIContext } from "../App";
import AccomList from "../components/Main/AccomList";
import SelectLocation from "../components/Main/SelectLocation";
import EventList from "../components/Main/EventList";
import MainBanner from "../components/Main/MainBanner";
import SiteDescription from "../components/Main/SiteDescription";


function Main() {
  const [area, setArea] = useState(null);
  const [siGunGu, setSiGunGu] = useState(null);
  const API_KEY = React.useContext(APIContext);

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
      <AccomList area={area} siGunGu={siGunGu} APIKEY={API_KEY} />
    </div>

  );
}

export default Main;
