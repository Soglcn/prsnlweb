import "./about.css";
import abt from "./about.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import Counter from "../../utils/Counter";
import { useReveal } from "../../hooks/useReveal";
import Footer from "../../assets/compFooter/footer.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGamepad,
    faCube,
    faGlobe,
    faCode,
    faClapperboard,
    faWandMagicSparkles,
    faLandmark,
    faYinYang
} from "@fortawesome/free-solid-svg-icons";

function About() {
    const { language } = useLanguage();

    useReveal();

    return (
        <main className="aboutPage">
            <div className="abHead reveal">
                <h2 className="abTopTitle">{t(abt, language, "title")}</h2>
                <div className="abContext">
                    <img src="/images/Heykel_2.png" alt="" />
                    <p className="abCatch">{t(abt, language, "aboutCatch")}</p>
                </div>
            </div>

            <div className="CompAb reveal">
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

            <div className="abHistory reveal">
                <h2 className="abTopTitle">{t(abt, language, "journey")}</h2>
                <p className="reveal">{t(abt, language, "bio_1")}</p>
                <br />

                <p className="reveal">{t(abt, language, "bio_2")}</p>
                <br />

                <p className="reveal">{t(abt, language, "bio_3")}</p>
                <br />

                <p className="reveal">{t(abt, language, "bio_4")}</p>
            </div>

            <div className="CompAb reveal">
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

            <div className="aboutStats reveal">
                <div className="statItem">
                    <span className="statNumber">
                        <Counter target={43} />
                    </span>
                    <span className="statLabel">
                        {t(abt, language, "projects")}
                    </span>
                </div>

                <div className="statDivider"></div>

                <div className="statItem">
                    <span className="statNumber">
                        <Counter target={11} />
                    </span>
                    <span className="statLabel">
                        {t(abt, language, "fields")}
                    </span>
                </div>

                <div className="statDivider"></div>

                <div className="statItem">
                    <span className="statNumber">
                        <Counter target={8} />
                    </span>
                    <span className="statLabel">
                        {t(abt, language, "experience")}
                    </span>
                </div>
            </div>

            <div className="CompAb reveal">
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

            <div className="skillSet reveal">
                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faGamepad} /> - {t(abt, language, "skillGame")}
                        </div>
                        <div className="skillList">{t(abt, language, "skillGameList")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faCube} /> - {t(abt, language, "sg1")}
                        </div>
                        <div className="skillList">{t(abt, language, "sg2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faGlobe} /> - {t(abt, language, "sweb1")}
                        </div>
                        <div className="skillList">{t(abt, language, "sweb2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faCode} /> - {t(abt, language, "ssoft1")}
                        </div>
                        <div className="skillList">{t(abt, language, "ssoft2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faClapperboard} /> - {t(abt, language, "smedia1")}
                        </div>
                        <div className="skillList">{t(abt, language, "smedia2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faWandMagicSparkles} /> - {t(abt, language, "sai1")}
                        </div>
                        <div className="skillList">{t(abt, language, "sai2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faLandmark} /> - {t(abt, language, "sres1")}
                        </div>
                        <div className="skillList">{t(abt, language, "sres2")}</div>
                    </div>
                </div>

                <div className="skillBox reveal">
                    <div className="skillHead">
                        <div className="skillTitle">
                            <FontAwesomeIcon icon={faYinYang} /> - {t(abt, language, "ssport1")}
                        </div>
                        <div className="skillList">{t(abt, language, "ssport2")}</div>
                    </div>
                </div>
            </div>

            <div className="footerMap reveal">
                <Footer />
            </div>
        </main>
    );
}

export default About;