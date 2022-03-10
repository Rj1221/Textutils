import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        props.showAlert("Converted to Uppercase",'success ')
        setText(newText);
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase",'success ')

    }
    const clearText =()=>{
        props.showAlert("Text has been Cleared",'success ')
        setText("");
    }

    // For Copy Text
    const copyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied!",'success ')

    }
    // Remove Extra Spaces 
    const removeExtra=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed",'success ')

    }
    const[text,setText]=useState("");
   // I am Using This Blank Because I dont want to show Any text to textarea I will Use PlaecHolder Instead!!!
    // text="New Text" ;// This is the WrongWay to Change the State
    // setText="New Text";//Correct Way to Change The State 
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'rgb(3 3 3)':'white',color:props.mode==='dark'?'white':'black'}} rows="8" value={text} placeholder='Enter Your Text'></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}  className="btn btn-success mx-1 my-1"onClick={lowerCase}>Convert to LowerCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            {/* Copy Button */}
            <button disabled={text.length===0}  className="btn btn-warning mx-1 my-1" onClick={copyText}>Copy Text</button>
            {/* Remove Extra Spaces */}
            <button disabled={text.length===0}  className="btn btn-danger mx1 my-1" onClick={removeExtra}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>

            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/* This is Used to Show The Number Of Words And Character Getting Used */}

            {/* This is Used to Show Number Of Minutes It Took To read The Words On an Average Of 0.008 Words  */}
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>

            {/* This is Used To Show The Above Text Written In Preview  */}
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    )
}
