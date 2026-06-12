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
        <h1>{t(appText, language, "home")}</h1>
      </main>

    </>
  );
}

export default App
