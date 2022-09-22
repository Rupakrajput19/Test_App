import "./App.css";
import { Routes, Route } from "react-router-dom";
import Singup from "./Components/Main/Singup";
import Login from "./Components/Main/Login";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Singup />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
