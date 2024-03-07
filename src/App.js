import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { Outlet } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar
      title="TextForm"
      About="About"
      mode={mode}
      toggleMode={toggleMode}
    >
    <Outlet/></Navbar>
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
    </div>
    </>
  );
}

export default App;
