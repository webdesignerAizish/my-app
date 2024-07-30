import React, {useState}  from 'react'


export default function TextForm(props) {
  const [text,setText] = useState('');
  const handleUpClick=()=>{
   // console.log("uppercase was click"+text);
    let newText=text.toUpperCase();
    setText(newText)
     props.showAlert("converted to lowercase","success")
  }
  const handleLuClick=()=>{
    // console.log("uppercase was click"+text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("converted to uppercase","success")
   }
   const handleClearClick=()=>{
    // console.log("uppercase was click"+text);
     let newText="";
     setText(newText)
     props.showAlert("text has been cleared","success")

   }
  // make this button work or make another function button
   const handleCopy=()=>{
    // console.log("uppercase was click"+text);
   
     var text=document.getElementById("myboxs");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("copy has been made","success")

   }
  const handleOnChange=(event)=>{
   // console.log("uppercase click");
    setText(event.target.value);

    
  }
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h1>{props.heading}</h1>
        
<div className="mb-3">
  <textarea className="form-control"  onChange={handleOnChange} value= {text}style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myboxs" rows="8"></textarea>
  <button className="btn btn-success" onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-success m-3" onClick={handleLuClick} >Convert to Lowercase</button>
  <button className="btn btn-success m-3" onClick={handleClearClick} >Clear text</button>
  <button className="btn btn-success m-3" onClick={handleCopy} >Copy Text </button>


</div>
    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="my-4">Your text summary</h1>
      <p>{text.split(" ").length} <b>words</b> {text.length} <b>charachter</b></p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
    
    <h2>Preview</h2>
    <div class="row">
    <div class="col-sm-10">
    <p>{text}</p>
    </div>
  </div>
    </div>
    </>
  )
}
