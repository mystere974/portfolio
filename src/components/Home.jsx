import DarkMode from './DarkMode';

import './Home.css'
import 'boxicons'


function Home () {
    
    
    return (
        <header>
           <div className="rightSide">
               <div className="btn dayNight">
                   <DarkMode />
               </div>
           </div>
       </header>
    )
}
export default Home;