import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router';

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
