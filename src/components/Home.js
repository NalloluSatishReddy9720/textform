import React from 'react'

export default function Home() {
  return (
    <>
<Navbar title="Textutils"  About="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3"> 
  {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
  
</div> 
</>
  )
}
