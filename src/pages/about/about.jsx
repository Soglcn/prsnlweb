import "./about.css";
import abt from "./about.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import { useReveal } from "../../hooks/useReveal";

function About() {
    const { language } = useLanguage();
    return (
        <main className="aboutPage">
            <div className="abHead">
                <h2 className="abTopTitle">{t(abt, language, "title")}</h2>
                <div className="abContext">
                    <img src="/images/Heykel_2.png" alt="" />
                    <p className="abCatch">{t(abt, language, "aboutCatch")}</p>
                </div>
            </div>

            <div className="selectedProjects">
                <div className="selTitle">
                    <div className="compassLine">
                        <span></span>
                        <img src="/images/compass.png" alt="Compass" />
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="abHistory">
                <h2 className="abTopTitle">{t(abt, language, "journey")}</h2>
                <p>{t(abt, language, "bio_1")}</p>
                <br />
                <p>{t(abt, language, "bio_2")}</p>
                <br />
                <p>{t(abt, language, "bio_3")}</p>
                <br />
                <p>{t(abt, language, "bio_4")}</p>
            </div>
        </main>
    );
}

export default About;