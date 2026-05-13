import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './shared/ui/base_components/Header/Header';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routing } from './components/Routing';
import { Navigation } from './components/Navigation/Navigation';


function App() {

  return (
    <>
    <BrowserRouter>
      <div>
        <Header title="shop" children={<Navigation />} />
        <main>
          <Routing />
        </main>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
