import { useState } from 'react'
import { Link } from "react-router-dom";
import "./footer.css";

import footText from "./footer.json";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { t } from "../../utils/translate.js";

import {
    faLinkedin,
    faGithub,
    faArtstation,
    faYoutube,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
    faPhone,
    faEnvelope,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    const { language } = useLanguage();
    return (
        <footer>
            <div className="footerArea">
                <div className="socials">
                    <h3 className="letsCont">
                        {t(footText, language, "letsCont")}
                    </h3>

                    <div className="socLinks">
                        <a href="https://www.linkedin.com/in/socy" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="https://github.com/Soglcn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.artstation.com/aetosdios" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArtstation} />
                        </a>

                        <a href="https://www.youtube.com/@scyozgat" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>

                        <a href="https://www.instagram.com/oglcn.snn/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                <div className="catch">
                    <h3 className="aut">
                        "Aut viam inveniam aut faciam."
                    </h3>
                    <img src="/images/sy_dark_logo.png" alt="" />
                </div>

                <div className="contact">
                    <h3 className="contactTitle">{t(footText, language, "contact")}</h3>

                    <div className="contactLinks">
                        <a className="contactItem" href="tel:+905304618269">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>+90-(530)-461-8269</span>
                        </a>

                        <a className="contactItem" href="mailto:info@soglcn.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> info@soglcn.com</span>
                        </a>

                        <a className="contactItem" href="mailto:oggy@soglcn.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> oggy@soglcn.com</span>
                        </a>

                        <a
                            className="contactItem"
                            href="https://maps.google.com/?q=Çankaya,Ankara,Turkey"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> {t(footText, language, "address")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;