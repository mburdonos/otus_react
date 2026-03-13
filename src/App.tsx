import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeToggle } from './shared/ui/base_components/ThemeToggle/ThemeToggle';
import LanguageSwitcher from './shared/ui/base_components/LanguageSwitcher/LanguageSwitcher';

function App() {

  return (
    <>
      <LanguageSwitcher></LanguageSwitcher>
      <ThemeToggle></ThemeToggle>
    </>
  )
}

export default App
