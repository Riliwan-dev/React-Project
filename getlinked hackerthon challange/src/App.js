import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main";
import Register from "./register"
import Contact from "./contact";




function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
