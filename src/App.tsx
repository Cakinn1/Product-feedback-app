import FeedBack from "./pages/FeedBack";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback/add" element={<FeedBack />} />
        </Routes>
      </Router>
    </div>
  );
}
