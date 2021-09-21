import './Home.css'
import 'boxicons'

function Home () {
    const dayNight = document.querySelector('.dayNight');
    const menuToggle = document.querySelector('.menuToggle');
    const body = document.querySelector('body');
    dayNight.onclick = function(){
        body.classList.toggle('dark')
    }
    return (
       <header>
           <div className="rightSide">
               <div className="btn dayNight">
               <box-icon name='moon' ></box-icon>
               <box-icon name='sun' ></box-icon>
               </div>
               <div className="btn menuToggle">
               <box-icon name='menu'></box-icon>
               <box-icon name='exit'></box-icon>
               </div>
           </div>
       </header>
    )
}
export default Home;