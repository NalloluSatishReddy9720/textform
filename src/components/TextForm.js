import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to upper case!","success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lower case!","success")
    }
    const handleclearClick=()=>{
        let newText = ""
        setText(newText)
        props.showAlert("text was cleared!","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("");
    return (
        <>
        <div className='container' style={{color:props.mode === 'light'?"white":'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?"white":'black',color:props.mode === 'dark'?"white":'black'}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?"white":'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(' ').length} words and {text.length} charecters</p>
        </div>
        </>
    )
}
