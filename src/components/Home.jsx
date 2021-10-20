import { useState } from "react";


import film from "../assets/video.mp4";
import mask from "../assets/mask.jpg";

import './Home.css'
import 'boxicons'


function Home () {
    const [darkMode, setDarkMode] = useState(false)
    
    return (
    
        
        <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
       <section className="main">
           <video playsInline="playsinline" autoPlay="autoplay" loop="loop" muted="muted">
               <source src={film} />
           </video>
           <img src={mask} className="mask" alt="mask" />
           <h2>LOGHANN MUSSARD</h2>
       </section>
       <div>
         About Me
       </div>
       </div>
        
       
       
    
    )
}
export default Home;