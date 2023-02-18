import "./Styles/App.scss";
import LandingPage from "./Views/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

import React from 'react'
import {SkillsContextProvider} from "./Hooks/SkillsContextProvider"
const App = () => {


  return (
   <SkillsContextProvider>
     <div className="app-Container">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element = {<h1>Wrong Page</h1>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
   </SkillsContextProvider>
  )
}

export default App