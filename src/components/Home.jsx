import { useState, useEffect } from "react";
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
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    
    return (
<>
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
       <section className="main" style= {{ transform: `translateY(${offsetY * 0.1}px)`}}>
           <video playsInline="playsinline" autoPlay="autoplay" loop="loop" muted="muted">
               <source src={film} />
           </video>
           {darkMode ? <img src={mask1} className="mask1" alt="mask1" /> : <img src={mask} className="mask" alt="mask" />}
           <h2>LOGHANN MUSSARD</h2>
       </section>
       <div>
         About Me
         Le LContrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.orem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.1615651651
62 65165        </div>
       </div>
       
       </>
        
       
       
    
    )
}
export default Home;