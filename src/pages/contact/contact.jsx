import "./contact.css";
import contactText from "./contact.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import Footer from "../../assets/compFooter/footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const { language } = useLanguage();

    return (
        <main className="contactPage">
            <div className="contMain">
                <div className="buildHead">
                    <h3>{t(contactText, language, "getTouch")}</h3>
                    <h1>{t(contactText, language, "letsBuild")}</h1>
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

                <div className="feelFree">
                    <p>{t(contactText, language, "introText")}</p>
                    <img src="/images/soyMain.png" alt="" className="oggyBoie" />
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

                <div className="conButtons">
                    <div className="cLinks">

                        <a href="mailto:oggy@soglcn.com" className="cItem">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>oggy@soglcn.com</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/socy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cItem"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>

                        <a
                            href="https://github.com/Soglcn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cItem"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>

                        <a
                            href="tel:+905304618269"
                            className="cItem"
                        >
                            <FontAwesomeIcon icon={faPhone} />
                            <span>+90 (530) 461 82 69</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>

                    </div>
                </div>

            </div>
            <div className="footerMap">
                <Footer />
            </div>
        </main>
    );
}

export default Contact;