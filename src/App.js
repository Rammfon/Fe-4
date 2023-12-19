import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShoppingListDetail from './components/ShoppingListDetail';
import ShoppingListOverview from './components/ShoppingListOverview';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import { I18nextProvider } from 'react-i18next';
import i18n from './translate/i18n';
import LanguageSwitcher from './components/LanguageSwitcher';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <I18nextProvider i18n={i18n}>
    <Router >
      <div className="container " id={theme}>
        <Header />
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <LanguageSwitcher />
        <div className="content" >
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<ShoppingListOverview />} />
            <Route path="/shopping-lists/:id" element={<ShoppingListDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </I18nextProvider>
    </ThemeContext.Provider>
  );  
} 

export default App;
