import { Link, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./assets/compHeader/header.jsx";
import Footer from "./assets/compFooter/footer.jsx";
import Banner from "./assets/compLoop/LogoMarquee.jsx";

import appText from "./App.json";
import { useLanguage } from "./context/LanguageContext";
import { t } from "./utils/translate";
import { useReveal } from "./hooks/useReveal";

import HeroModel from "./assets/HeroModel";
import compassIcon from "/images/compass.png";
import mePhoto from "/images/soyMain.png";

import XenoModel from "./assets/XenoModel.jsx";
import MeowModel from "./assets/MeowModel.jsx";
import CosmicModel from "./assets/CosmicModel.jsx";


import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact.jsx";


import Xeno from "./pages/projects/xeno";
import Meow from "./pages/projects/moewditation";
import Contamination from "./pages/projects/cosmic-contamination";
import Sol from "./pages/projects/sol66.jsx";
import FinX from "./pages/projects/finx.jsx";
import Arch from "./pages/projects/archeadict.jsx";
import Dim from "./pages/projects/dimengine.jsx";
import Ignitaria from "./pages/projects/ignitaria.jsx";
import Quad1 from "./pages/projects/quadrushers-1.jsx";
import Quad2 from "./pages/projects/quadrushers-2.jsx";
import Torch from "./pages/projects/torch.jsx";
import Ash from "./pages/projects/ash.jsx";
import Best from "./pages/projects/best.jsx";
import Fyrane from "./pages/projects/fyrane.jsx";
import Muse from "./pages/projects/muse.jsx";
import Agri from "./pages/projects/agri.jsx";
import FitX from "./pages/projects/fitx.jsx";
import Gateway from "./pages/projects/gateway.jsx";
import Veren from "./pages/projects/veren.jsx";
import Sima from "./pages/projects/sima.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  const { language } = useLanguage();

  useReveal();

  return (
    <>
      <Header />

      <main>
        <p className="daedalus reveal">"Medio limite vola: ne si demissior ibis, unda gravet pennas; si celsior, ignis adurat." <br /><span>Metamorphoses VIII, 200–235</span></p>
        <div className="hideInMobile">
          <div className="leftCompass">
            <div className="hidSoc">
              <a
                href="https://linkedin.com/in/socy"
                className="hidLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="hidIcon" />
              </a>

              <a
                href="https://github.com/Soglcn"
                className="hidLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="hidIcon" />
              </a>

              <a
                href="https://instagram.com/oglcn.snn"
                className="hidLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="hidIcon" />
              </a>

              <a
                href="https://youtube.com/@scyozgat"
                className="hidLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="hidIcon" />
              </a>
            </div>
          
            <div className="heroLine"></div>
            <img className="heroCompass" src={compassIcon} alt="Compass" />
          </div>
          <p className="scText">
            {t(appText, language, "scroll")}
          </p>
        </div>
        <div className="hero">
          <div className="landingWelcome">
            <div className="welcomeTextArea">
              <h2 className="wlcTitle">{t(appText, language, "title")}</h2>
              <h1 className="wlcName">SİNAN OĞULCAN YOZGAT</h1>
              <h2 className="wlcDescription">
                {t(appText, language, "description")}
              </h2>
              <h2 className="wlcCatch">{t(appText, language, "catch")}</h2>


              <div className="linkInDiv">
                <Link to="/projects" className="btnExplore">
                  {t(appText, language, "explore")}
                  <span></span>
                  <span className="arrowUpRight">→</span>
                </Link>

                <Link to="/projects" className="btnResume">
                  {t(appText, language, "resume")}
                  <span className="theEmptinessMachine"></span>
                  <span className="arrowUpRight">↓</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="heroModel">
            <HeroModel />
            <img className="heroBg" src="/images/contallienbg.png" alt="" />
          </div>
        </div>

        <div className="selectedProjects reveal reveal-up">
          <div className="selTitle">
            <h3 className="selSub">{t(appText, language, "selectedWorks")}</h3>

            <div className="compassLine">
              <img src={compassIcon} alt="Compass" />
              <span></span>
            </div>
          </div>

          <div className="featured reveal reveal-left">
            <div className="featuredText">
              <h3 className="featureNumber">01</h3>
              <h1 className="featuredName">XENO</h1>
              <h2 className="featuredDesc">
                {t(appText, language, "xenoDesc")}
              </h2>

              <div className="featuredModels">
                <XenoModel />
              </div>

              <Link to="/projects/xeno" className="btnGoProject">
                {t(appText, language, "goProject")}
                <span></span>
                <span className="arrowUpRight">→</span>
              </Link>
            </div>
          </div>

          <div className="featured reveal reveal-right">
            <div className="featuredText">
              <h3 className="featureNumber">02</h3>
              <h1 className="featuredName">MEOWDITATION</h1>
              <h2 className="featuredDesc">
                {t(appText, language, "meowDesc")}
              </h2>

              <div className="featuredModels">
                <MeowModel />
              </div>

              <Link to="/projects/meowditation" className="btnGoProject">
                {t(appText, language, "goProject")}
                <span></span>
                <span className="arrowUpRight">→</span>
              </Link>
            </div>
          </div>

          <div className="featured reveal reveal-left">
            <div className="featuredText">
              <h3 className="featureNumber">03</h3>
              <h1 className="featuredName">COSMIC CONTAMINATION</h1>
              <h2 className="featuredDesc">
                {t(appText, language, "cosmicDesc")}
              </h2>

              <div className="featuredModels">
                <CosmicModel />
              </div>

              <Link to="/projects/cosmic-contamination" className="btnGoProject">
                {t(appText, language, "goProject")}
                <span></span>
                <span className="arrowUpRight">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="aboutCont reveal reveal-up">
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
            <div className="abText reveal reveal-left">
              <p className="abMe">{t(appText, language, "abMe")}</p>

              <Link
                to="/about"
                className="btnGoProject"
                style={{ display: "inline-block" }}
              >
                {t(appText, language, "more")}
                <span></span>
                <span className="arrowUpRight">→</span>
              </Link>
            </div>

            <div className="mePhoto reveal reveal-right">
              <img src={mePhoto} alt="Sinan Oğulcan Yozgat" />
            </div>
          </div>
        </div>

        <div className="selectedProjects reveal reveal-up">
          <div className="selTitle">
            <h3 className="selSub">{t(appText, language, "org")}</h3>

            <div className="compassLine">
              <img src={compassIcon} alt="Compass" />
              <span></span>
            </div>
          </div>
        </div>

        <div className="bannerArea reveal reveal-up">
          <h2 className="bannerText">{t(appText, language, "orgExp")}</h2>
          <Banner />
        </div>

        <div className="footerMap reveal reveal-up">
          <Footer />
        </div>
      </main>
    </>
  );
}

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<><Header /><About /></>} />
      <Route path="/projects" element={<><Header /><Projects /></>} />
      <Route path="/contact" element={<><Header /><Contact /></>} />
      <Route path="/projects/xeno" element={<><Header /><Xeno /></>} />
      <Route path="/projects/meowditation" element={<><Header /><Meow /></>} />
      <Route path="/projects/cosmic-contamination" element={<><Header /><Contamination /></>} />
      <Route path="/projects/sol66" element={<><Header /><Sol /></>} />
      <Route path="/projects/finx" element={<><Header /><FinX /></>} />
      <Route path="/projects/archeadict" element={<><Header /><Arch /></>} />
      <Route path="/projects/dimengine" element={<><Header /><Dim /></>} />
      <Route path="/projects/ignitaria" element={<><Header /><Ignitaria /></>} />
      <Route path="/projects/quadrushers-1" element={<><Header /><Quad1 /></>} />
      <Route path="/projects/quadrushers-2" element={<><Header /><Quad2 /></>} />
      <Route path="/projects/torchbearer" element={<><Header /><Torch /></>} />
      <Route path="/projects/the-ash-of-faith" element={<><Header /><Ash /></>} />
      <Route path="/projects/bestselfer-cloud" element={<><Header /><Best /></>} />
      <Route path="/projects/fyrane-cloud" element={<><Header /><Fyrane /></>} />
      <Route path="/projects/mus-e" element={<><Header /><Muse /></>} />
      <Route path="/projects/analytical-agriculture" element={<><Header /><Agri /></>} />
      <Route path="/projects/fitx" element={<><Header /><FitX /></>} />
      <Route path="/projects/gateway" element={<><Header /><Gateway /></>} />
      <Route path="/projects/veren" element={<><Header /><Veren /></>} />
      <Route path="/projects/sima" element={<><Header /><Sima /></>} />
    </Routes>
  );
}

export default App;