import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {  // Yha Props Pass Kar rhe hai becoz dusra template Banane me help  hogi
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
            {/*--------------------------------------> NavBar Title Starts ---------------------------------->*/}

              <Link className="navbar-brand" to="/">{props.title}</Link>


            {/*--------------------------------------> Navbar Title Ends ---------------------------------->*/}

        {/* Yha props.title is liye use kiye hai jis se Apps.js Me Navbar ke sath title likh ke title pass kar sake  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
           {/*---------------------------------> Navbar Container Starts.---------------------------> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


            {/*---------------------------------> Navigation Unlist Order Starts.---------------------------> */}

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/*--------------------------------------> 1st List Order Starts ---------------------------------->*/}
            <li className="nav-item">
              <Link  className="nav-link" aria-current="page" to="/" >Home</Link>
            </li>
            {/*--------------------------------------> 1st List Order Ends ---------------------------------->*/}

            {/*--------------------------------------> 2nd List Order Starts ---------------------------------->*/}

            <li className="nav-item">
              <Link to="/about" className="nav-link" >{props.aboutText}</Link>
              {/* Yha pe Jo bhi data App.js se pass hoga aboutText me wo Yha show Karega*/}
            </li>
            {/*--------------------------------------> 2nd List Order Ends  ---------------------------------->*/}

          </ul>
            {/*---------------------------------> Navigation Unlist Order Ends.---------------------------> */}


           {/*--------------------------------> For Red Button Starts-----------------------------> */}
              
            <div className="d-flex">
              <div className="bg-primary round mx-2" onClick={()=>props.toggleMode("primary")} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger round mx-2" onClick={()=>props.toggleMode("danger")} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success round mx-2" onClick={()=>props.toggleMode("success")} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning round mx-2" onClick={()=>props.toggleMode("warning")} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            </div>
              

           {/*--------------------------------> For Red Button Ends-----------------------------> */}

           {/*--------------------------------> For Dark Button Starts-----------------------------> */}


          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={()=>props.toggleMode(null)} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ToogleMode</label>
          </div>


           {/*--------------------------------> For Dark Button Ends-----------------------------> */}

        </div>
      </div>
    </nav>

  )
}

//Ye Proptype Ko Validate Karne Ke Liye Hota hai Means Agar App.js me Title me string Type ki jagah Number Type Ya Kuch aur denge to Ye Error Dega  Ek tarah se Ye Validation Hai
Navbar.propTypes = {
  title: PropTypes.string.isRequired,//Agar Default props nhi de rakhe hai phir bhi chahte hai ki title Compulsory hai to Use kar sakte hai Proptype.string.isNecessary (Jis se agar Title nahi pass karenge to Error Dega)
  aboutText: PropTypes.string.isRequired,
  aboutContact: PropTypes.string.isRequired
}
// Agar Navbar ke Sath Props Laga rhe hai aur Pass Nhi kar Rhe hai to Ye By Default Ye Shw Kar Dega Title Pe AboutText aur aboutContact pe
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About",
  aboutContact: "Contact"
}
