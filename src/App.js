import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Properties from "./Pages/Properties/Properties";
import Search from "./Pages/Search/Search";
import About from "./Pages/About/About";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/properties" element={<Properties></Properties>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/ProperyDetails"
          element={<PropertyDetails></PropertyDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
