import { useState } from 'react'
import { Link } from "react-router-dom";

import './App.css'
import Header from "./assets/compHeader/header.jsx";

import appText from "./App.json";
import { useLanguage } from "./context/LanguageContext";
import { t } from "./utils/translate";


function App() {
  const { language} = useLanguage();
  return (
    <>
      <Header />

      <main>
        <div className="landingWelcome">
          <div className="welcomeTextArea">
            <h2 className="wlcTitle">{t(appText, language, "title")}</h2>
          </div>
        </div>
        <div className="test">
          second
        </div>
      </main>

    </>
  );
}

export default App
