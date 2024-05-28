import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Properties from "./Pages/Properties/Properties";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/properties" element={<Properties></Properties>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
