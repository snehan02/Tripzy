import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/login";
import Signup from "./components/pages/Signup";
import Tours from "./components/pages/Tours";
import Packages from "./components/pages/Packages";
import About from "./components/pages/About";
import TourDetails from "./components/pages/TourDetails";
import ChatBot from "./components/pages/chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
