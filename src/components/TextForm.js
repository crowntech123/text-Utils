import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");

    }
    const handleOnChanange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
       }
       const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const onClickCopyText=()=>{
      var text= document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert("your text is copied just paste it wherever you want!","success")

    }
    const [text , setText] = useState('Enter Your Text Here');
   
    
    
  return (
    <>
   <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
   
            <textarea className="form-control" value={text} onChange={handleOnChanange} id="myBox" rows="10" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={onClickCopyText}>Copy your Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>clear All text</button>
            </div>   
    </div>
    <div className="container">
      <h1>Your Text summary</h1>
      <p >
      {text.split(" ").length} {text.split(" ").length==='1'?' word':' words'} {text.length} characters
     
      
      
</p>
    </div>
    </div>
    </>
  )
}
