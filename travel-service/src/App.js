import React, { useEffect, useState } from "react";
import Scroll from "./components/Scroll";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accomdetail from "./routes/Accomdetail";
import Main from "./routes/Main";
import EventDetail from './routes/EventDetail'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import Keep from './routes/Keep';

export const APIContext = React.createContext();
const APIKEY =
  "p%2FlaNOV0RM5G19AFrkR%2BR%2BgM8RCHbGWehQrAS7OryZo46ArT%2FTqEBW%2BNJPckAiCMQeJHtyH71TLtvdejdKOGYw%3D%3D";

export const KeepStateContext = React.createContext()
export const KeepContext = React.createContext()

function App() {

  const [keepAccomData, setKeepAccomData] = useState([])
  const [keepEventData, setKeepEventData] = useState([])

  useEffect(()=>{
    const AccomLocalData = localStorage.getItem('accommodation')
    const EventLocalData = localStorage.getItem('event')
    if (AccomLocalData) {
      const accomList = JSON.parse(AccomLocalData)
      if (accomList.length >= 1) {
        setKeepAccomData(accomList)
      }
    }
    if (EventLocalData) {
      const eventList = JSON.parse(EventLocalData)
      if (eventList.length >= 1) {
        setKeepEventData(eventList)
      }
    }
  }, [])

  // const onKeepAccom = (image, title, tel, addr) => {
  //   let newKeepAccom = []
  //   const accomdata = {
  //     image,
  //     title,
  //     tel,
  //     addr,
  //   }
  //   newKeepAccom = [accomdata, ...keepAccomData]
  //   localStorage.setItem('accommodation', JSON.stringify(newKeepAccom))
  // }
  const onKeepEvent = (image, title, tel, addr) => {
    let newEventAccom = []
    const eventdata = {
      image,
      title,
      tel,
      addr,
    }
    newEventAccom = [eventdata, ...keepEventData]
    localStorage.setItem('event', JSON.stringify(newEventAccom))
  }


  return (
    <div>
      <APIContext.Provider value={APIKEY}>
      <KeepStateContext.Provider value={{keepAccomData, keepEventData}}>
      {/* <KeepContext.Provider value={{onKeepAccom, onKeepEvent}}> */}
        <Router>
          <Scroll />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/accomdetail/:id" element={<Accomdetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/event/:id" element={<EventDetail />}/>
            <Route path="/keep" element={<Keep />}/>
          </Routes>
          <Footer />
        </Router>
      {/* </KeepContext.Provider> */}
      </KeepStateContext.Provider>
      </APIContext.Provider>

    </div>

  );
}

export default App;
