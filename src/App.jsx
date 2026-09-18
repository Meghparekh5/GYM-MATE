import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages.jsx";
import Class from "./pages/Class.jsx";
import './App.css'
import Navmain from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navmain/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/class" element={<Class />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;