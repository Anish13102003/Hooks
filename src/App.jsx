import Effect from "./Component/Effect"
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Task from "./Component/Task"
import {BrowserRouter, Routes, Route } from "react-router-dom";


const App = ()=>{
  return(

    <>
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   
    <Task/>
    <Effect/>
    </>
  )
}
export default App
