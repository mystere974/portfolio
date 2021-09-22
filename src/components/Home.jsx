import { useState } from 'react';

import './Home.css'
import 'boxicons'

function Home () {
    
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