import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import MyProjects from "./components/MyProjects";
import Nav from "./components/Nav";
import Smalld from "./components/Smalld";
import WhatIDo from "./components/WhatIDo";
import WhoIAm from "./components/WhoIAm";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="nav" element={<Nav />} /> */}
          <Route path="smalld" element={<Smalld />} />
          <Route path="whatido" element={<WhatIDo />} />
          <Route path="whoiam" element={<WhoIAm />} />
          <Route path="myprojects" element={<MyProjects />} />
          <Route path="address" element={<Address />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
