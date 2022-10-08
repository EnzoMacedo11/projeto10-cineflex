import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./Session";
import Room from "./Room"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/session/:sessionId" element={<Session/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  );
}
