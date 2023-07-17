import "./App.css";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
