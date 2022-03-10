import React from "react"

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
        
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    
    // let newStyle={
    //     padding:'10px 10px'
    // };
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

//    const toggleStyle= ()=>{
//         if (myStyle.color === 'black') {
//             setMyStyle({
//                color:'white',
//                backgroundColor:'black',
//                border:'1px solid white'
//             });
//             setBtnText("Enable Light Mode")
//         }else{
//             setMyStyle({
//                 color:'black',
//                 backgroundColor: 'white' 
//              });
//              setBtnText("Enable Dark Mode");  
//         }
//     }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'dark',backgroundColor:props.mode==='dark'?'grey':'white'}}>
                <h1 className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
                <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}}>


                    <div className="accordion-item"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}}>
                        <h2 className="accordion-header" id="headingOne"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',border:'2px solid white'}}
                            >
                              <strong>Analyze Your Text</strong> 
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body"style={{color:props.mode==='dark'?'white':'black'}}>

                                TextUtils Gives a way to analyze your text quickly and efficently. Be it word count, character count
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' ,border:'2px solid white'}}
                            >
                               <strong>Free to use </strong> 
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                            
                        >
                            <div className="accordion-body"style={{color:props.mode==='dark'?'white':'black'}}>
                                TextUtils is a Text Editor Which is Free to use it will count your number and words. So with the help of Text Utils you can easily count number of words and characters 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}}>
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',border:'2px solid white'}}
                            >
                               <strong>Analyse Your Text</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black'}}>
                               This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Opera and Many more . It can Convert any Text in UpperCase Easily As well as Lower case also and can easily remove extra spaces Used in text just by a single click.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dark Mode Button */}
                {/* <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
                <button type="button" className="btn btn-dark my-3" onClick={toggleStyle}>{btnText}</button>  
                </div> */}
            </div>
        </>
    );
}
