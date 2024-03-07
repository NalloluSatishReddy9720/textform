import React, { useState } from "react";

export default function About() {
    const [myStyle,setMyStyle] = useState({
        color:'white',
        backgroundColor:'black',
    })
    const [textBtn,newTextBtn] = useState('light mode')
    const toggleStyle = ()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            newTextBtn("dark mode")
        }else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            newTextBtn("light mode")
        } 
    }
  return (
    <h1>hello satish</h1>
  );
}
