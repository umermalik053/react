import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import Detail from "./pages/Detail";
import { projectData } from './utils/constant/ProjectData';
const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pages/Detail" element={<Detail />} />
        <Route path="/pages/detail/:id" element={<Detail profiles={projectData} />} />
        <Route path="*" element="error" />
      </Routes>

    </div>
  )
}

export default App
