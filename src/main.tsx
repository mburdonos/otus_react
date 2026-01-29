import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider.tsx';
import { LanguageProvider } from './context/LanguageContext';
import './index.css'
import App from './App.tsx'
import i18n from './i18n'; // Инициализация i18n

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
    <App />
    </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
