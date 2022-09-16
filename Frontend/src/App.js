import "./App.css";
import { Routes, Route } from "react-router-dom";
import Singup from "./Components/Singup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Grid from "./Components/Grid";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Singup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/grid" element={<Grid />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
