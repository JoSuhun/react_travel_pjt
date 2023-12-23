import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accomdetail from "./routes/Accomdetail";
import Main from "./routes/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";

export const APIContext = React.createContext();
const APIKEY =
  "p%2FlaNOV0RM5G19AFrkR%2BR%2BgM8RCHbGWehQrAS7OryZo46ArT%2FTqEBW%2BNJPckAiCMQeJHtyH71TLtvdejdKOGYw%3D%3D";

function App() {
  return (
    <div>
      <APIContext.Provider value={APIKEY}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/accomdetail/:id" element={<Accomdetail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </Router>
      </APIContext.Provider>
    </div>
  );
}

export default App;
