import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageContext';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css'
import App from './App'
import i18n from './i18n'; // Инициализация i18n

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <Provider store={store}>
    <App />
    </Provider>
    </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
