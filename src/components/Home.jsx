import { useState } from "react";
import { parallaxBanner, ParallaxProvider } from "react-scroll-parallax"
import { Background, Parallax } from "react-parallax";
import parallaxVideo from "../parallaxVideo";

import film from "../assets/video.mp4";
import mask from "../assets/mask.jpg";
import mask1 from "../assets/mask-noir.jpg"

import './Home.css'
import 'boxicons'


function Home () {
    const [darkMode, setDarkMode] = useState(false)
    const video = {
      playsInline: "playsinline",
      autoPlay:"autoplay",
      loop:"loop",
      muted:"muted"
    }
    const source ={
      src:{film}
    }
    const inline = {
      left: '50%',
      top: '50%',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }
    
    return (
      <>
<Parallax strength={500} bgImage={mask}>
  <div style={{ height: 500}}>
    <Background className="main">
  <video playsInline="playsinline" autoPlay="autoplay" loop="loop" muted="muted">
               <source src={film} />
           </video>
           
           <h2>LOGHANN MUSSARD</h2>
    <div style={inline}>LOGHANN MUSSARD</div>
      </Background>
  </div>
</Parallax>
  

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
           {darkMode ? <img src={mask1} className="mask1" alt="mask1" /> : <img src={mask} className="mask" alt="mask" />}
           <h2>LOGHANN MUSSARD</h2>
       </section>

       <div>
         About Me
         </div>
       </div>
       
       </>
        
       
       
    
    )
}
export default Home;