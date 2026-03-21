import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './shared/ui/base_components/Header/Header';
import './App.css';
import { ThemeToggle } from './shared/ui/base_components/ThemeToggle/ThemeToggle';
import LanguageSwitcher from './shared/ui/base_components/LanguageSwitcher/LanguageSwitcher';
import { BrowserRouter } from "react-router-dom";
import { Routing } from './components/Routing';
import { Navigation } from './components/Navigation/Navigation';


function App() {

  return (
    <>
    <BrowserRouter>
          <Routing />
      <Header title="shop" children={ <Navigation /> }/>

    </BrowserRouter>
    </>
  )
}

export default App
