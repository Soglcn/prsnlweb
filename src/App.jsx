import { useState } from 'react'
import { Link } from "react-router-dom";

import './App.css'
import Header from "./assets/compHeader/header.jsx";

import appText from "./App.json";
import { useLanguage } from "./context/LanguageContext";
import { t } from "./utils/translate";

import HeroModel from "./assets/HeroModel";
import compassIcon from "/images/compass.png";
import mePhoto from "/images/soyMain.png"

import XenoModel from './assets/XenoModel.jsx';
import MeowModel from './assets/MeowModel.jsx';
import CosmicModel from './assets/CosmicModel.jsx';

function App() {
  const { language } = useLanguage();
  return (
    <>
      <Header />

      <main>
        <div className="hero">
          <div className="landingWelcome">
            <div className="welcomeTextArea">
              <h2 className="wlcTitle">{t(appText, language, "title")}</h2>
              <h1 className="wlcName">SİNAN OĞULCAN YOZGAT</h1>
              <h2 className="wlcDescription">{t(appText, language, "description")}</h2>
              <h2 className="wlcCatch">{t(appText, language, "catch")}</h2>
              <button className="btnExplore">{t(appText, language, "explore")} <span></span><span className="arrowUpRight">↗</span></button>
              <button className="btnResume">{t(appText, language, "resume")} <span></span><span className="arrowUpRight">↓</span></button>
            </div>
          </div>
          <div className="heroModel">
            <HeroModel />
            <img
              className="heroBg"
              src="/images/contallienbg.png"
              alt=""
            />
          </div>
        </div>

        <div className="selectedProjects">
          <div className="selTitle">
            <h3 className="selSub">{t(appText, language, "selectedWorks")}</h3>
            <div className="compassLine">
              <img src={compassIcon} alt="Compass" />
              <span></span>
            </div>
          </div>

          <div className="featured">
            <div className="featuredText">
              <h3 className="featureNumber">01</h3>
              <h1 className="featuredName">XENO</h1>
              <h2 className="featuredDesc">{t(appText, language, "xenoDesc")} </h2>
              <div className="featuredModels"><XenoModel /></div>
              <button className="btnGoProject">{t(appText, language, "goProject")} <span></span><span className="arrowUpRight">→</span></button>
            </div>
          </div>
          <div className="featured">
            <div className="featuredText">
              <h3 className="featureNumber">02</h3>
              <h1 className="featuredName">MEOWDITATION</h1>
              <h2 className="featuredDesc">{t(appText, language, "meowDesc")} </h2>
              <div className="featuredModels"><MeowModel /></div>
              <button className="btnGoProject">{t(appText, language, "goProject")} <span></span><span className="arrowUpRight">→</span></button>

            </div>
          </div>
          <div className="featured">
            <div className="featuredText">
              <h3 className="featureNumber">03</h3>
              <h1 className="featuredName">COSMIC CONTAMINATION</h1>
              <h2 className="featuredDesc">{t(appText, language, "cosmicDesc")} </h2>
              <div className="featuredModels"><CosmicModel /></div>
              <button className="btnGoProject">{t(appText, language, "goProject")} <span></span><span className="arrowUpRight">→</span></button>
            </div>
          </div>
        </div>

        <div className="aboutCont">
          <div className="abTitle">
            <div className="abTop">
              <h3 className="abSub">{t(appText, language, "abTitle")}</h3>
              <div className="compassAb">
                <img src={compassIcon} alt="Compass" />
                <span></span>
              </div>
            </div>

          </div>

          <div className="aboutDescArea">
            <div className="abText">
              <p className="abMe">
                {t(appText, language, "abMe")}
              </p>
              <button className="btnGoProject">{t(appText, language, "more")} <span></span><span className="arrowUpRight">→</span></button>
            </div>

            <div className="mePhoto">
              <img src={mePhoto} alt="Sinan Oğulcan Yozgat" />
            </div>
          </div>

        </div>

      </main>

    </>
  );
}

export default App
