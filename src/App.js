import { BrowserRouter } from 'react-router-dom'
import {ParallaxProvider} from "react-scroll-parallax"
import { Switch, Route } from 'react-router';
import { useState } from 'react';

import Home from './components/Home';
import './App.css';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <ParallaxProvider>
      <Home/>
      </ParallaxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
