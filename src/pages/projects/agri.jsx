import "./inProjects.css";
import pt from "./agri.json";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";

import Footer from "../../assets/compFooter/footer.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCircleCheck,
    faUserTie,
    faMicrochip,
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

function Agri() {
    const { language } = useLanguage();

    return (
        <main className="projectPage">

            <div className="base">
                <Link to="/projects" className="backButton">{t(pt, language, "back")}</Link>
                <img className="headImg" src="/images/projects/analytical-agriculture.png" alt="" />

                <div className="headAr">
                    <h1>{t(pt, language, "title")}</h1>
                    <p>{t(pt, language, "subtitle")}</p>
                </div>
                                <div className="prAb2">
                    <div className="selectedProjects">
                        <div className="selTitle">
                            <div className="compassLine">
                                <img src="/images/compass.png" alt="Compass" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="statAr">
                    <div className="stStat">
                        <h1><FontAwesomeIcon icon={faCircleCheck} /> {t(pt, language, "stStat")}</h1>
                        <h2>{t(pt, language, "stActive")}</h2>
                    </div>

                    <div className="stRole">

                        <h1><FontAwesomeIcon icon={faUserTie} /> {t(pt, language, "stRole")}</h1>
                        <h2>{t(pt, language, "stRoleExp")}</h2>
                    </div>

                    <div className="stTech">

                        <h1><FontAwesomeIcon icon={faMicrochip} /> {t(pt, language, "stTech")}</h1>
                        <h2>{t(pt, language, "stTechExp")}</h2>
                    </div>

                    <div className="stYear">

                        <h1><FontAwesomeIcon icon={faCalendarDays} /> {t(pt, language, "stYear")}</h1>
                        <h2>{t(pt, language, "stYearExp")}</h2>
                    </div>
                </div>

                <div className="prAb">
                    <div className="selectedProjects">
                        <div className="selTitle">
                            <div className="compassLine">
                                <span></span>
                                <img src="/images/compass.png" alt="Compass" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="over">
                    <h1>{t(pt, language, "overview")}</h1>
                    <p>{t(pt, language, "prExp")}</p>
                </div>

                <div className="prAb">
                    <div className="selectedProjects">
                        <div className="selTitle">
                            <div className="compassLine">
                                <span></span>
                                <img src="/images/compass.png" alt="Compass" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="usedTechs">
                    <h1>{t(pt, language, "techs")}</h1>
                    <div className="uTech">
                        <div className="techLabel"> Java </div>
                        <div className="techLabel"> SQL </div>
                        <div className="techLabel"> Python </div>
                        <div className="techLabel"> API </div>
                        
                    </div>
                </div>

                <div className="moreDetail">
                    <img src="/images/hermes.png" alt="" className="goddess" />
                    <div className="detTextArea">
                        <h1>{t(pt, language, "wantMore")}</h1>
                        <p>{t(pt, language, "wantContact")}</p>
                        <Link to="/contact">
                            <button className="btnCont">
                                {t(pt, language, "getContact")} →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footerMap"><Footer /></div>

        </main>
    );
}

export default Agri;