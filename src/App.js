import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import { useState } from 'react';

import Home from './components/Home';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

const styledApp = styled.div`

  font-color: ${(props) => props.theme.fontColor}

  `;

function App() {
  const [theme, setTheme] = useState("light")


    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
      <styledApp>Hello world
      <button onClick= {() => themeToggler()}>Change mode</button>
      </styledApp>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
