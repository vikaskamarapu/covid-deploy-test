import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Joinus from "./components/Joinus";
import About from "./components/About";
import Support from "./components/Faq";
import Signup from "./components/Signup";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/covid-deploy-test/" element={<Home />}></Route>
        <Route path="/covid-deploy-test/joinus" element={<Joinus />}></Route>
        <Route path="/covid-deploy-test/about" element={<About />}></Route>
        <Route path="/covid-deploy-test/support" element={<Support />}></Route>
        <Route path="/covid-deploy-test/signup" element={<Signup />}></Route>
        <Route path="/covid-deploy-test/faq" element={<Faq />}></Route>
        <Route path="/covid-deploy-test/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </div>
  )
}

export default App
