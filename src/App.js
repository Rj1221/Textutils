import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
//---------------------------> React Router Import-------------------------------------------------->
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

//----------------------------->React Router Import Finished------------------------------------------->

export default function App() {

  //----------------------------------- For Dark Mode Button Function Starts-------------------------------------------->
  let [mode, modeSet] = useState('light');  //Ye is Liye Use kiye hai ki by Default Light Color Rahe is Liye

  let toggleMode = (cls) => { // Toggle Button Ka Ye Function hai Ki Toggle Button Pe Click Ho to mode dark set Ho Jay Light se 
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if (mode === "light") {   // Agar Pehle Se Light Hai to Dark Kar do Aur dark Hai to Light Kar do Uske liye Condition Hai
      modeSet('dark');
      document.body.style.backgroundColor = 'grey';  // Body ka Background Color Change Ho Jai
      showAlert(" Dark Mode has been Enabled", 'success ')

      /* Agar Dynamically Title Badalna chahte hai to hum usse Aise kar sakte hai
       document.title='TextUtils -  Dark Mode'*/

    } else {
      modeSet('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has Been Enabled", 'success ')


      /* Agar Dynamically Title Badalna chahte hai to hum usse Aise kar sakte hai
       document.title='TextUtils -  Light Mode'*/
    }
  }
  //<------------------------------------ >For Dark Mode Button Function Ends-------------------------------------------->
  // <------------------------------ Function To Remove Body Classes Starts-------------------------------------------->

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');


  }
  // <------------------------------ Function To Remove Body Classes Ends-------------------------------------------->


  // <--------------------------------------------------------For Alert Function Starts-------------------------------->
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // <--------------------------For Alert Function Ends ---------------------------------->
  return (

    <>
      {/*---------------------------------->Browser Router Starts Here ------------------------------------------>*/}
      <BrowserRouter>
        {/*<----------------------------------------------- NavBar Starts-------------------------------------------- */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> {/*Navbar me kon sa Mode By Default rahe wo Mode se Set Kar Diya Gya hai aur toggleMode Radio Button Hai */}
        {/* Yha se Data pass hoga because Procs set Kar rakhe hai Navbar Components Me  */}
        {/* <Navbar/>Ye By Default Default Props Components se Shoe kar Dega Because Yha Koi Bhi Title ,aboutText aur aboutContact Nhi set hai */}
        {/*<----------------------------------------------- NavBar Ends-------------------------------------------- */}


        {/*<-----------------------------------------------Alert Starts-------------------------------------------- */}

        <Alert alert={alert} />
        {/*<----------------------------------------------- Alert Ends-------------------------------------------- */}


        {/*-------------------------------------------->Main Routing Starts--------------------------------------> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode} />} />
          </Routes>
        </div>
        {/*-------------------------------------------->Main Routing Ends--------------------------------------> */}


      </BrowserRouter>
      {/*----------------------------------> Browser Router Ends Here ------------------------------------------>*/}
    </>


  );
}

