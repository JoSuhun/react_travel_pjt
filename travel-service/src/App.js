import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./routes/Main";
import EventDetail from './routes/EventDetail'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/event/:id" element={<EventDetail />}/>
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
